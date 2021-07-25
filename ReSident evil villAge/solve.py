from pwn import *
# context.log_level = 'debug'

p = remote("quiz.ais3.org", 42069)

p.recvuntil(b"n = ")
n = int(p.recvline()[:-1])

p.sendline(b"1")
p.sendline(hex(163)[2:].encode())

p.recvuntil("Signature: ")
sig1 = int(p.recvline()[:-1])

p.sendline(b"1")
p.sendline(hex(33759323085949548325642458097)[2:].encode())

p.recvuntil("Signature: ")
sig2 = int(p.recvline()[:-1])

sig = sig1 * sig2 % n

p.sendline(b"2")
p.sendline(str(sig))

p.interactive()