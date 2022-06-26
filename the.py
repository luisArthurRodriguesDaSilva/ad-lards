import os
adresses = list(map(lambda x: (str('./imagens/' + x)) ,os.listdir('./imagens')));

names=list(map(lambda x: (str(x.split('.')[0].replace('-',' '))) ,os.listdir('./imagens')));

prices = []

for i in range(len(adresses)):
    print(f"preço do {names[i]} é")
    prices.append(input()66)
    print(prices)

print(os.listdir('imagens'))
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