
flagdata = ["4 0 B", "2 0 g", "3 0 i", "5 1 J", "6 0 6", "0 1 \\", "3 0 w", "4 0 1", "3 0 A", "4 1 j", "4 0 \\", "4 1 1", "3 0 g", "7 0 u", "3 0 i", "1 0 k", "3 0 l", "4 0 7", "6 0 x", "5 0 i", "5 0 X", "1 0 K", "1 0 I", "4 0 h", "5 0 X", "0 0 K", "4 1 i", "5 1 l", "7 0 6", "7 0 f", "4 0 o", "1 0 6", "5 0 5", "7 0 K", "1 1 n", "5 1 8", "7 0 7", "4 1 B", "5 0 -", "1 1 8", "4 0 w", "3 1 a", "1 0 r", "4 1 z", "7 0 K", "3 0 =", "2 0 =", "1 0 ="]

bytesStr = ""

shift = "AlS3{BasE64_i5+b0rNIng~\\Qwo/-xH8WzCj7vFD2eyVktqOL1GhKYufmZdJpX9}"

dic = {}
for i, c in enumerate(shift):
    dic[c] = i

for l in flagdata:
    c, r, val = l.split(" ")
    r = int(r)
    c = int(c)
    if (val == '='):
        continue
    val = dic[val]
    bytesStr += "".join(bin(r)[2:].zfill(1) + bin(c)[2:].zfill(3) + bin(val)[2:].zfill(6))

ans = ""
for i in range(len(bytesStr) // 8):
    ch = bytesStr[i * 8: (i+1) * 8]
    ans += chr(int(ch, 2))

print(ans)