"""
#importing Package required for the project

#for GUI
from tkinter import *
#for randomly selecting the numbers
import random

#tkinter GUI instance
root= Tk()
root.geometry("700x450")

#label for the button
l1= Label(root,text='Hello',font=('times',200))

#'roll' function and parameter to roll the dice
def roll():
    number= ['\u2680','\u2681','\u2682','\u2683','\u2684', '\u2685']
    l1.config(text=f'{random.choice(number)}{random.choice(number)}')
    l1.pack()

#packing label into button
b1= Button(root,text='Roll me...',command= roll)

#button placed location
b1.place(x=330,y=0)

#mainloop() tells Python to run the Tkinter event loop.

#This method listens for events, such as button clicks
#or keypresses, and blocks any code that comes after it from running until the window it's called on is closed.

root.mainloop()
"""


#-------------------------------------Without Comment---------------------------------------

import random
from tkinter import *

root= Tk()
root.geometry("700x450")

l1= Label(root,text='',font=('times',200))

def roll():
    number= ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685',]
    l1.config(text=f'{random.choice(number)}{random.choice(number)}')
    l1.pack()

b1= Button(root,text='Roll me!...', command= roll)
b1.place(x=330, y=330)

root.mainloop()

