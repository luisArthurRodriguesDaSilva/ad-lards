# pip install webdriver-manager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time
from bs4 import BeautifulSoup

s=Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=s)
driver.maximize_window()

xpathPatternPrefix = '/html/body/div[1]/div/div/div/div[3]/div/div/div[1]/span'

urls = [
"https://minhaloja.boticario.com.br/ana-lcia/pronta-entrega",
"https://minhaloja.eudora.com.br/clica-luar-cosmeticos/pronta-entrega",
"https://minhaloja.ouiparis.com/ana-lcia/pronta-entrega",
]

names = []
imgAdresses = []

def addinfo(url):
  driver.get(url)
  time.sleep(3)
  for i in range(4):
    name =  driver.find_element(By.XPATH,f'{xpathPatternPrefix}[{i+1}]/div/div/a/div[3]/span').text
    imgAdress = (driver.find_element(By.XPATH,f'{xpathPatternPrefix}[{i+1}]/div/div/a/div[1]/div/img')).get_attribute("src")
    names.append(name)
    imgAdresses.append(imgAdress)

for url in urls:
  addinfo(url)

print('names',names)
print('imgAdress',imgAdresses)


