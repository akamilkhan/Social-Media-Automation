"""Writing a crawler to scrap goodreads for quotes, as requested by tinda for his android project"""

#importing modules

import requests
from bs4 import BeautifulSoup
import multiprocessing as mp
import progressbar
import lxml
# creating the worker
def worker(x,y):
	a=requests.get(x)
	soup = BeautifulSoup(a.content,"lxml")
	b=soup.find_all(attrs={"class":"quoteText"})
	for i in range(len(b)):
		c=b[i].get_text().encode("utf-8").decode('ascii', 'ignore')
		try:
			author = b[i].find(attrs={"class":"authorOrTitle"}).get_text().encode("utf-8").decode('ascii', 'ignore')
		except:
			author = ""
		d=c.split('"')
		e=open(y + "_Quotes.csv","a")
		e.write(y + "^" +author+"^"+ d[1]+ "\n")
		e.close
#		print "Quote number " + str(i) +" saved."
	
#creating the url if name of author is given
def creator_name(author,pages):
	link_list=[]
	for i in range(1,pages+1):
		link = "https://www.goodreads.com/search?page="+ str(i) + "&q=" + author + "&search[source]=goodreads&search_type=quotes&tab=quotes"
		link_list.append(link)
	return link_list

#creating the url if name of topic is given
def topic_name(topic,pages):
	link_list=[]
	for i in range(1,pages+1):
		link = "https://www.goodreads.com/quotes/tag/"+topic+"?page="+str(i)
		print link
		link_list.append(link)
	return link_list

# Getting a list of urls if a list of author is provided
def creator_list(file,pages):
	container={}
	for i in open(file):
		link = creator_name(i,pages)
		container[i]=link
	return container

#getting the preference for name/list

def checker():
	check = True
	while check == True:
		x=raw_input('Do you want to enter name or provide a list? enter "n" for name and "l" for list:')
		print x
		if x == "n":
			return True
			check==False
		elif x == "l":
			return False
			check == False


print "Welcome to tinda scrapper ..!"
print "This script will scrap goodreads for the quotes of given topic ..!"
x=checker()
if x == True:
	author = raw_input("enter the name of the topic: ")
	pages = int(raw_input("Enter the number of the pages to proccess : "))
	url_list = creator_name(author,pages)
	pbar=progressbar.ProgressBar()
	workers = []
	for key in pbar(url_list):
		worker(key,author)
#		t=mp.Process(target=worker,args=(url,author))
#		t.start()
#		workers.append(t)
#	[t.join() for t in workers]
elif x == False:
	file_name = raw_input("Enter the name of file : ")
	pages = int(raw_input("Enter the number of the pages : "))
	author_list=creator_list(file_name,pages)
	pbar=progressbar.ProgressBar()
	workers=[]
	for key in pbar(author_list):
		for url in pbar(author_list[key]):
			worker(url,key)
#			t=mp.Process(target=worker,args=(url,"Authors"))
#			t.start()
#			workers.append(t)
#	[t.join() for t in workers]




