import sys
import os
import string
if __name__ == '__main__':
    # dropping priv.
    _eval = __builtins__.eval
    del __builtins__.exec
    del __builtins__.eval
    del __builtins__.__import__
    while True:
        spell = input("Spell: ")
        # unlocked = sys.argv[2].strip()
        # unlocked = unlocked.split(",") if len(unlocked) != 0 else []
        # max_length = int(sys.argv[3])
        # rebirthed = int(sys.argv[4])
        
        try:
            spell.encode('ascii')
        except UnicodeEncodeError:
            print("YOU SHALL NOT PASS!")
            exit()

        # if not rebirthed and len(spell) > max_length:
        #     print("YOU SHALL NOT PASS!")
        #     exit()

        curses = list(string.ascii_lowercase+string.digits+"()'\".")
        blacklist = set()
        # blacklist = set(curses)
        # for i in unlocked:
        #     blacklist -= set(curses[int(i)])
        # if rebirthed:
        #     blacklist -= set("'\".")
        for char in spell:
            if char in blacklist:
                print("YOU SHALL NOT PASS!")
                exit()

        
        print("[+] Casting Magic... ", _eval(spell, {}))
