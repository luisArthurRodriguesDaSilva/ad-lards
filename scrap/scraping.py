# pip install webdriver-manager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time
from bs4 import BeautifulSoup

options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('window-size=1920x1080')
options.add_argument("disable-gpu")

s=Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=s,options=options)
driver.maximize_window()

xpathPatternPrefix = '/html/body/div[1]/div/div/div/div[3]/div/div/div[1]/span'

urls = [
"https://minhaloja.boticario.com.br/ana-lcia/pronta-entrega",
"https://minhaloja.eudora.com.br/clica-luar-cosmeticos/pronta-entrega",
"https://minhaloja.ouiparis.com/ana-lcia/pronta-entrega",
]

names = []
adresses = []
prices= []

def convertPrice(precoFeio):
  print(precoFeio)
  convertedprice = float(precoFeio[2:].replace(' ','').replace(',', '.'))
  return convertedprice

def addinfo(url):
  driver.get(url)
  time.sleep(3)
  for i in range(4):
    name =  driver.find_element(By.XPATH,f'{xpathPatternPrefix}[{i+1}]/div/div/a/div[3]/span').text
    imgAdress = (driver.find_element(By.XPATH,f'{xpathPatternPrefix}[{i+1}]/div/div/a/div[1]/div/img')).get_attribute("src")
    try:
      price = driver.find_element(By.XPATH,f'{xpathPatternPrefix}[{i+1}]/div/div/a/div[5]/h6').text
    except Exception as e:
      price = driver.find_element(By.XPATH,f'{xpathPatternPrefix}[{i+1}]/div/div/a/div[4]/h6').text
    names.append(name)
    adresses.append(imgAdress)
    prices.append(convertPrice(price))

for url in urls:
  addinfo(url)

prices = list(map(str, prices))
print('prices',prices)


with open("relat.js", 'w') as file:
    file.write(
        """const tabelinha = {
            
  'adressesOfImg' :[""" + "'" + str("',\n'".join(adresses)) + "'" + """]
  ,
  'names' : [""" + "'" + str("',\n'".join(names)) + "'" + """]
  ,
  'prices' : [""" + "'" + str("',\n'".join(prices)) + "'" + """]
};

export default tabelinha;
""")


