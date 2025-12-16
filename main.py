#for the first user
print("Welcome to the Age comparison system!")
print("First User:")
name = input("Enter your name: ")
age = input("Enter your age: ") 

#for the second user

print("Second User:")
name2 = input("Enter your name also: ")
age2 = input("Enter your age: ")
#conditional statements to compare ages

if age == age2:
    print( name + " and " + name2 + " are of the same age.")
elif age > age2:
    print(name + " is older than " + name2)
else:
    print(name2 + " is older than " + name)
    
def main():
    