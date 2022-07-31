import os
adresses = list(map(lambda x: (str('./prodImgs/' + x)) ,os.listdir('./prodImgs')));

names=list(map(lambda x: (str(x.split('.')[0].replace('-',' '))) ,os.listdir('./prodImgs')));

prices = []

for i in range(len(adresses)):
    print(f"preço do {names[i]} é")
    prices.append(str(float(input())))
    print(prices)

print(os.listdir('prodImgs'))
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