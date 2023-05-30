import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';


const AsciiArt = `
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXXXNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNOc::;cxXNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNkc,cxxdl,:xKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNOc,cx00O00kl;:xKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMWNOc;ck0000O00O0Ol,;xXNWWMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMWWNOc,cx00O000000O00Okl;:xKNWWMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMWNOc,ck000000000OO00O000kl,:xKNWWMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMWNOc,ck000000000000000000000kl,:xKNWMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMWNOc,ck00OOOOOOOOOOOOOOOOOOOOOO0Ol,:xKNWMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMWWNOc,cxO0Ol,:c:;,;:c::c:::::::::;lO0kl,:xKNWWWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMWNOc,ck00O0k,'okk; ,xOkkkkkkkkkkkk;'x000kl;:xKNWWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMWNOc,ck000000d.,dlc. .lk000000000000:.o00000kl,:xKNWMMMMMMMMMMMMMM
MMMMMMMMMMMWNOc,ck0000000O: ..      .',,,,,,,,,,,. :O0000O0Ol,:xKNWMMMMMMMMMMMM
MMMMMMMMWWNOc,cx00000O00Oc.                        .cO0000000kl;:xKNWWMMMMMMMMM
MMMMMMMWNOc,ck00000OO000k,                          ,k0OO000000kl,:xKWWWMMMMMMM
MMMMMWNOc,cx00000000OOO0k,                          'k00000000000kl;:xKNWMMMMMM
MMWWNkc,ck00000O00000000x'                          .d0O0000O0000O0Ol,:xXNWWWMM
WWNOc,cx00O00000O0000000kl,.  .;;;;;;;;;;;;;::;.   'lk000000000000000kl;:xKNWWM
W0c,ck000000000O0000Okdolc,. .c00000000OOkxdol:.  ,x000000000000O000000kl,:kXWM
Xc.o0000000000000kl;',,,;:cloxO00000Od:,'',,;;:lodk0000OO0000000000000000x';OXW
Nk:,lk0000000000d'.;oxkO00000000000Oc..;cxkO000000O00000000000000000OO0Oo;;d0XN
WNKx:,lk0O000000l..oO000OOO00000000k; ;dk00000O000000O000000000000000Oo;;oOKXWW
MMWNXx:;lk0O0000Ol'.';loxkO000000O00x;...,cldkO00000000000000000000Oo;;oOKXNWWW
WWWMWNXx:;lk0OO000Oxl:;''',;coxO000000kxdl:,''',:cokO000000000000Oo;;oOKXNWWWMM
MMMMMWWWKx:;lk000000000Oxdlc;'.'ck000000000Okxol:,'.,oO0000O0O0Oo;;oOKXNWMMMMMM
MMMMMMMMWNKx:;lk0O00000000000Ox;.;k00OO0000000000Oko..c0000O0Oo;;oOKXNWWMMMMMMM
MMMMMMMMMWWWXd:;lk0O000000OO00Oc 'k0O00O000000000O0x' cO000Oo;;oOKXNWWMMMMMMMMM
MMMMMMMMMWWMWNKx:;lk00O0000O0kc..o000O000000000000d'.;k00Oo;:oOKXNWWMMMMMMMMMMM
MMMMMMMMMMMMMMWNXx:,lk00000kl'.,dO00000000000000x:..lO0Oo;;oOKXNWMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMWNXx:,lk000x:;oO0000000000000000o,:x0Oo;;oOKXNWWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMWWNKx:,lk00O0000000000000000000OO0Oo;;oOKXNWMWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMWWMWNKx:,lk0O0000000000000000000Oo;;oOKXNWWWMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMWWKx:,ck000O000000000O0O0Oo;;oOKXNWMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMWNKx:,lk0O00000O00000Oo;;oOKXNWWMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMWWNKx:,lk0O0000000Oo;;oOKXNWMWMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMWWMWNKx:;lk00O00Oo;:oOKXNWWMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKx:,lkOxo;;oOKXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKx:::;:oOKXNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNX000KXXNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWMMWNNNNWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
`;

console.log(AsciiArt)