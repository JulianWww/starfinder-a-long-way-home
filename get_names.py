with open("japanese-name-generator.txt") as file:
  names = [name[:-1].split(" ")[1] for name in file.readlines()]

with open("out.txt", "w") as file:
  file.write(str(names)) 