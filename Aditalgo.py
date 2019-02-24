words = open('googlecommon10000.txt','r')
lis = []
for item in words.readlines():
    lis.append(item[:-1])





def coord_to_w3w(x,y):
  x = str(float(x)-8.0)
  y= str(float(y)-68.0)
  m = 29 * 150 * 200

  print(x,y)
  

  x = float(x)
  y = float(y)
  x1 = x // 0.00005# 0.00005
  y1 = y // 0.00005 #0.00005
  unique = str(int(m * x1 + y1 ))
  
  num1,num2,num3 = int(unique[:4]),int(unique[4:8]),int(unique[8:12])
  
  w3w= lis[num1]+"."+lis[num2]+"."+lis[num3]
  return w3w
  
def w3wtounique(w3w):
    w3w = w3w.split('.')
    w1 = w3w[0]
    w2 = w3w[1]
    w3 = w3w[2]
    w1 = lis.index(w1)
    w2 = lis.index(w2)
    w3 = lis.index(w3)
    return int(str(w1) + str(w2) + str(w3))


def uniquetocoord(unique):
    m = 29*150*200  #no of blocks in one vertical row across india, aim is to create a 2D array on india
    x = unique // m
    print(x)
    x = x * 0.00005
    print(x)
    y = unique % m
    print(y)
    y = y* 0.00005
    print(x+8.0,y+68.0)
    
while True:
    k = input("Enter:")
    k = k.split(', ')
    print((coord_to_w3w((k[0]),(k[1]))))
    m = input("Enter address")
    uniquetocoord(w3wtounique(m))
