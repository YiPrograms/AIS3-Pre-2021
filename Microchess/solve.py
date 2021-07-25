
def splitmix64(x: int) -> int:
    U64_MASK = 0xFFFFFFFFFFFFFFFF
    x = (x + 0x9E3779B97F4A7C15) & U64_MASK
    x = ((x ^ (x >> 30)) * 0xBF58476D1CE4E5B9) & U64_MASK
    x = ((x ^ (x >> 27)) * 0x94D049BB133111EB) & U64_MASK
    return x ^ (x >> 31)



def pad(message: bytes) -> bytes:
    c = -len(message) % 8
    return message + b'\x00' * c


def digest(message: bytes, init: int):
    message = pad(message)
    print(message)

    blocks = [int.from_bytes(message[i:i+8], 'big')
                for i in range(0, len(message), 8)]

    def f(a: int, b: int) -> int:
        for i in range(16):
            a, b = b, a ^ splitmix64(b)
        print(b)
        return b

    state = init
    for block in blocks:
        state = f(state, block)

    return state


import sys
inp = sys.argv[1]

game_str, dig = inp.split(':')
secret = digest(game_str.encode(), 0) ^ int(dig, 16)

print("Secret", secret)

print("2,2" + ":" + digest(b"2,2", secret).to_bytes(8, 'big').hex())
print(game_str + ":" + digest(game_str.encode(), secret).to_bytes(8, 'big').hex())
print(game_str + ":" + digest(game_str.encode(), 5872573699275086147).to_bytes(8, 'big').hex())


