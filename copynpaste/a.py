from hashlib import sha256
import string
flag = 'AIS3{THIS_IS_A_FAKE_FLAG}'

cand = string.ascii_letters + string.digits + '_{}'
charset = string.printable[:93]
dic = {}
enc = ''

for c in charset:
    dic[c] = []

for c in cand:
	assert(c in cand)
	dic[charset[int(sha256(c.encode()).hexdigest(), 16) % len(charset)]].append(c)

out = """)g;Fk@>2g;2V2J?d5G3_8V2<dR2i5GZ@<?2)g\j_2V&?2;@[F@ek2_3"=k&;2)\F2J9LL4g[W2"[2<)RZ23@<?2elFZ?2=@jZ23@=F2Yi52;lL5Vj2J?2J8\e@eW23e2lF330"""


ans = ""

# a = "AIS3{iT_IS_4_Beaut1FU4_d"

# for i, c in enumerate(a):
#     if c != " ":
#         dic[out[i]] = [c]
# dic["e"] = ["7"] #n7
# dic["="] = ["k"] #kwQ
a = "AIS3{iT_IS_4_Beaut1FUL_day_0utside_8IrD5_4Re_SiNGin9_F1owERS_Ar3_BlOOmIN6_oN_dAys_1iKe_7h3se_kiDs_1ik3_Y0u_ShOuLD_Be_BUrnin6_1n_h311}"


for c in out:
    if len(dic[c]) == 0:
        exit(1)
    
    if len(dic[c]) == 1:
        ans += dic[c][0]

    else:
        ans += "\n" + dic[c].__repr__() + "\n"

print(ans)