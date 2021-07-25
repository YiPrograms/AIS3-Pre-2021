
r0 = input("FLAG: ")
r1 = getattr
r2 = [exit, str].__getitem__

r2(r0.startswith("AIS3{"))
r2(r0.endswith("}"))

r2(r0[6].__eq__("A"))
r2(r0[9].__eq__("j"))

r3 = r0[9]
r2(r0[11].__eq__("p"))
r2(r0[14].__eq__(r3))

r4 = r0[1]
r2(r0[5].__eq__("d"))
r2(r0[10].__eq__("z"))
r2(r0[12].__eq__("h"))
r2(r4.__eq__(r0[13]))
r2(r0[8].__eq__("w"))
r2(r0[7].__eq__("m"))

print("Correct")

flag = "AIS3{dAmwjzphIj}"



