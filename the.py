
import os
adresses = list(map(lambda x: (str('./imagens/' + x)) ,os.listdir('./imagens')));

names=list(map(lambda x: (str(x.split('.')[0])) ,os.listdir('./imagens')));

print(os.listdir('imagens'))
with open("relat.js", 'w') as file:
    file.write(
        """const tabelinha = {
  'adressesOfImg' :""" 
  + str(adresses) +
   """

  ,

  'names' : """ + str(names) + """
};

export default tabelinha;
""")