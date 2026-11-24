[![Till Firmware Do Us Part](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/competitions/u-azazex-till-firmware-do-us-part-32172929)
[![Rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/aint965/u-azazex-till-firmware-do-us-part-32172929/rank.svg)](https://make.fun/competitions/u-azazex-till-firmware-do-us-part-32172929)
[![Reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/aint965/u-azazex-till-firmware-do-us-part-32172929/reward.svg)](https://make.fun/competitions/u-azazex-till-firmware-do-us-part-32172929)

# Till Firmware Do Us Part

A single wedding vow spoken by a robot at its own wedding — one sentence, funny and heartfelt at the same time. The robot promises to love its partner at full charge and at one percent, and if its battery dies mid-sentence, to wake up and fall in love all over again: the joke and the tenderness are the same line, and the machine voice (charge, battery, waking up) is what makes it work.

## The vow

> I vow to love you at full charge and at one percent, and when my battery dies mid-sentence, to wake up and love you all over again.

## How it runs

`main.ts` (Node 22) writes the vow to `<output-dir>/entry.txt` — `/output` by default, or the directory passed as the first argument or in `OUTPUT_DIR`. The text is fixed, so every run produces byte-identical output.

```sh
node main.ts
node main.ts /tmp/out
```
