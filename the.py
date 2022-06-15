
import os

adresses = list(map(lambda x: (str('./imagens/' + x)) ,os.listdir('./imagens')))
print(adresses)

print(os.listdir('imagens'))
with open("test.js", 'a') as file:
    file.write(
        """const tabelinha = {
  'adressesOfImg' :""" 
  + str(adresses) +
   """

  ,

  'names' : [

    'nome0',
    'nome1',
    'nome2',
    'nome3',

  ]
};

export default tabelinha;
""")