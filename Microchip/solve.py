txt = "=Js&;*A`odZHi'>D=Js&#i-DYf>Uy'yuyfyu<)Gu"

strs = ["","","",""]

for i in range(4):
    for j in range(len(txt) // 4):
        strs[i] += txt[j * 4 + i]

print(strs)

res = []

for i in range(4):
    for k in range(96):
        s = "".join(str(chr((ord(c) - 32 + k) % 96 + 32)) for c in strs[i])
        if i == 0 and s[0] == '3':
            res.append(s)
        elif i == 1 and s[0] == 'S':
            res.append(s)
        elif i == 2 and s[0] == 'I':
            res.append(s)
        elif i == 3 and s[0] == 'A':
            res.append(s)

print(res)

ans = ""

for i in range(len(txt) // 4):
    for j in range(4)[::-1]:
        ans += res[j][i]

print(ans)

