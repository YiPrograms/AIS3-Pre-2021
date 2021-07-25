const constants = [
    'repeat',
    '1YqKovX',
    'NDBCMjBnMzBpNTFKNjA2MDFcMzB3NDAxMzBBNDFqNDBcNDExMzBnNzB1MzBpMTBrMzBsNDA3NjB4NTBpNTBYMTBLMTBJNDBoNTBYMDBLNDFpNTFsNzA2NzBmNDBvMTA2NTA1NzBLMTFuNTE4NzA3NDFCNTAtMTE4NDB3MzFhMTByNDF6NzBLMzA9MjA9MTA9',
    'substr',
    'output',
    'getElementsByTagName',
    '65022JgPEZp',
    'keydown',
    'length',
    'innerHTML',
    '677PRUQAU',
    'ArrowLeft',
    'QWxTM3tCYXNFNjRfaTUrYjByTkluZ35cUXdvLy14SDhXekNqN3ZGRDJleVZrdHFPTDFHaEtZdWZtWmRKcFg5fQ==',
    '133781JKLWBV',
    'ArrowUp',
    '90407czXCgh',
    // A <div>
    'PGRpdiBzdHlsZT0id2lkdGg6IDM1MHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogMHB4OyBsZWZ0OiAwcHg7Ij48ZGl2IHN0eWxlPSJ0ZXh0LWFsaWduOiBjZW50ZXI7IGFuaW1hdGlvbjogcmFpbmJvdyAycyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTEwcHg7IGxlZnQ6IDUwJTsgZm9udC1zaXplOiAyMHB4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IHdpZHRoOiAzNTBweDsiPkhlcmUgaXMgeW91cjxicj4iZW5jb2RlZCIgZmxhZyw8YnI+aW5wdXQgdG8gZW5jb2RlIHNvbWV0aGluZyBlbHNlITwvZGl2PiA8c3ZnIGlkPSLwn5CIIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGlkPSJib2R5Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBkdXI9IjUwMG1zIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjM7MC40OzAuNTswLjY7MC43OzAuODswLjk7MSIgdmFsdWVzPSIgI2ZmOGQ4YjsgI2ZlZDY4OTsgIzg4ZmY4OTsgIzg3ZmZmZjsgIzhiYjVmZTsgI2Q3OGNmZjsgI2ZmOGNmZjsgI2ZmNjhmNzsgI2ZlNmNiNzsgI2ZmNjk2ODsgI2ZmOGQ4YiAiPjwvYW5pbWF0ZT48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJkIiBkdXI9IjUwMG1zIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjM7MC40OzAuNTswLjY7MC43OzAuODswLjk7MSIgdmFsdWVzPSIgTTY3LjEsMTA5LjVjLTkuNiwwLTIzLjYtOC44LTIzLjYtMjRjMC0xMi4xLDE3LjgtNDEsMzcuNS00MWMxNS42LDAsMjMuMywxMC42LDI1LjEsMjAuNSBjMS45LDEwLjcsMy45LDguMiwzLjksMTkuNWMwLDguMi0zLjgsMTctMy44LDIyLjNjMCwzLjksMS40LDcuNCwyLjksMTAuNWMxLjcsMy41LDIuNCw2LjYsMi40LDkuMkg5LjVjMC0xMy43LDEwLjgtMTQsMjEuMS0yMyBjNS42LTQuOSwxMS0xMi40LDE0LjUtMjY7IE01Ni4xLDEwNy41Yy05LjYsMC0yNC42LTEzLjgtMjQuNi0yOWMwLTE2LjIsMTMtNDIsMzMuNS00MmMxNy44LDAsMjIuMywxMS42LDI2LjEsMjIuNSBjMy42LDEwLjMsOS45LDkuMiw5LjksMjAuNWMwLDguMi0xLjgsNy0xLjgsMTIuM2MwLDQuNSwzLjQsOC4yLDYuNCwxNC4xYzIuNSw0LjgsNC44LDExLjIsNC44LDIwLjZoLTk5YzAtMTIuMSw3LjItMTcuNiwxNC43LTI0LjMgYzMuMi0yLjksNi41LTUuOSw5LjItOS44OyBNNDUuMSwxMDkuNWMtNS41LTAuMi0yNy42LTguNC0yNy42LTI3YzAtMTcuOSwxNC44LTQyLDMyLjUtNDJjMTUuNCwwLDI0LDEwLjQsMjYuMSwyMS41IGMxLjMsNi43LDkuOSw5LjgsOS45LDIxLjVjMCw4LjItMC44LDYtMC44LDExLjNjMCw3LjcsMTIuOCw5LDIwLjgsMTVjNy43LDUuOCwxNS41LDE2LjcsMTUuNSwxNi43aC0xMTBjMC00LjgsMS43LTExLjMsNS0xNiBjMy4yLTQuNSw0LjUtOC4zLDUtMTU7IE0zNiwxMjBjLTUuNS0wLjItMjguNS0xMS45LTI4LjUtMzAuNWMwLTE2LjIsMTIuNS00MiwzMy00MmMxNy44LDAsMjEuOCw5LjYsMjUuNiwyMC41IEM2OS43LDc4LjMsNzYsNzguMiw3Niw4OS41YzAsOC4yLTAuOCw0LTAuOCw5LjNjMCw1LjksMTYuNSw3LjgsMjguNCwxNS45YzgsNS41LDE3LjksMTEuOCwxNy45LDExLjhoLTExMGMwLTIuMS0xLjItNS4yLTEuOS0xNC41IGMtMC4zLTMuNi0wLjUtOC4xLTAuNS0xMy45OyBNMzcsMTE5LjVjLTE1LDAuMS0zMy41LTEyLjctMzMuNS0zMEMzLjUsNzMuMywxNiw0NywzNi41LDQ3YzE3LjgsMCwyMi44LDExLDI2LDIyIEM2NS42LDc5LjQsNzMsNzkuMiw3Myw5MC41YzAsNC0xLjgsNi42LTEuOCw4LjNjMCw1LjksMTQuMiw2LjQsMjYuNCwxNS45YzcuNyw2LDEzLjksMTEuOCwxMy45LDExLjhINy41Yy0xLjItMy40LTEuOC03LjMtMS45LTExLjIgYy0wLjItNS4xLDAuMy0xMC4xLDAuOS0xMy43OyBNNDAuNSwxMjEuNWMtMTIuNiwwLTMwLTEzLjQtMzAtMjlDMTAuNSw3Ni4zLDIzLDUzLDQzLjUsNTNjMTQuNSwwLDIyLjgsOS42LDI1LDIyIGMxLjIsNi45LDEwLDkuMiwxMCwyMC41YzAsNCwwLDUuNiwwLDcuM2MwLDQuOSw2LjEsNy41LDExLjIsMTEuOWM1LjgsNSw3LjIsMTEuOCw3LjIsMTEuOEg4LjVjMC0xLjUtMC42LTYuMSwwLjQtMTEuOCBjMC42LTMuNSwxLjktNy41LDQuMy0xMS42OyBNNDguNSwxMjEuNWMtMTIuNiwwLTI1LTYuMy0yNS0xOGMwLTE2LjIsMTMuNy00NywzNi00N2MxNS42LDAsMjQuOCw5LjEsMjcsMjEuNSBjMS4yLDYuOSw3LDkuMiw3LDE4LjVjMCw5LjUtNCwxMS00LDIyYzAsNC4xLDAuNSw1LDEsNmMwLjUsMS4yLDEsMiwxLDJoLTgxYzAtNS4zLDMuMS04LjMsNi4zLTExLjVjMi42LTIuNiw1LjQtNS4zLDYuNy05LjU7IE02OC41LDEyMS41Yy0xMi42LDAtMzMtNS44LTMzLTIzYzAtOS4yLDExLjgtMzYsMzctMzZjMTUuNiwwLDI1LjgsOC4xLDI4LDIwLjUgYzEuMiw2LjksNCw2LjIsNCwxNS41YzAsOS41LTUsMTUuMS01LDIxYzAsMS45LDEsMi4zLDEsNWMwLDEuMiwwLDIsMCwyaC05MWMwLjUtNy42LDcuMS0xMS4xLDEzLjctMTUuN2M0LjktMy40LDkuOS03LjUsMTIuMy0xNC4zOyBNNzMuNSwxMTcuNWMtMTIuNiwwLTMwLTYuMi0zMC0yNWMwLTE0LjIsMjAuOS0zNywzOC0zN2MxNy42LDAsMjUuOCwxMS4xLDI4LDIzLjUgYzEuMiw2LjksMyw3LjIsMywxNi41YzAsMTIuMS02LDE2LjEtNiwyMmMwLDQuMiwyLDUuMywyLDhjMCwxLjIsMCwxLDAsMUg3LjVjMi4xLTkuNCwxMC40LTEzLjMsMTkuMi0xOS40IGM3LjEtNSwxNC40LTExLjUsMTguOC0yMy42OyBNODAuNSwxMTUuNWMtMTIuNiwwLTMyLTkuMi0zMi0yOGMwLTE0LjIsMjIuOS0zNSw0MC0zNWMxNy42LDAsMjUuOCwxMi4xLDI4LDI0LjUgYzEuMiw2LjksMyw2LjIsMywxNS41YzAsMTIuMS02LDE5LjEtNiwyNWMwLDQuMiwyLDUuMywyLDhjMCwxLjIsMCwxLDAsMWgtMTAyYzIuMy04LjcsMTEuNi0xMS43LDIwLjgtMjAuMSBjNS4zLTQuOCwxMC41LTExLjQsMTQuMi0yMS45OyBNNjcuMSwxMDkuNWMtOS42LDAtMjMuNi04LjgtMjMuNi0yNGMwLTEyLjEsMTcuOC00MSwzNy41LTQxYzE1LjYsMCwyMy4zLDEwLjYsMjUuMSwyMC41IGMxLjksMTAuNywzLjksOC4yLDMuOSwxOS41YzAsOC4yLTMuOCwxNy0zLjgsMjIuM2MwLDMuOSwxLjQsNy40LDIuOSwxMC41YzEuNywzLjUsMi40LDYuNiwyLjQsOS4ySDkuNWMwLTEzLjcsMTAuOC0xNCwyMS4xLTIzIGM1LjYtNC45LDExLTEyLjQsMTQuNS0yNiAiPjwvYW5pbWF0ZT48L3BhdGg+PHBhdGggaWQ9ImJlYWsiIGZpbGw9IiM3YjhjNjgiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImQiIGR1cj0iNTAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuMzswLjQ7MC41OzAuNjswLjc7MC44OzAuOTsxIiB2YWx1ZXM9IiBNNzguMjksNzBjMC05LjkyLDIuNS0xNCw4LTE0czgsMi4xNyw4LDEwLjY3YzAsMTUuOTItNywyNi4zMy03LDI2LjMzUzc4LjI5LDg1LjUsNzguMjksNzBaOyBNNjIuMjksNjRjMC05LjkyLDIuNS0xNCw4LTE0czgsMi4xNyw4LDEwLjY3YzAsMTUuOTItNywyNi4zMy03LDI2LjMzUzYyLjI5LDc5LjUsNjIuMjksNjRaOyBNNDguMjksNjdjMC05LjkyLDIuNS0xNCw4LTE0czgsMi4xNyw4LDEwLjY3YzAsMTUuOTItNywyNi4zMy03LDI2LjMzUzQ4LjI5LDgyLjUsNDguMjksNjdaOyBNMzYuMjksNzNjMC05LjkyLDIuNS0xNCw4LTE0czgsMi4xNyw4LDEwLjY3YzAsMTUuOTItNywyNi4zMy03LDI2LjMzUzM2LjI5LDg4LjUsMzYuMjksNzNaOyBNMzUuMjksNzVjMC05LjkyLDIuNS0xNCw4LTE0czgsMi4xNyw4LDEwLjY3YzAsMTUuOTItNywyNi4zMy03LDI2LjMzUzM1LjI5LDkwLjUsMzUuMjksNzVaOyBNNDEuMjksODFjMC05LjkyLDIuNS0xNCw4LTE0czgsMi4xNyw4LDEwLjY3YzAsMTUuOTItNywyNi4zMy03LDI2LjMzUzQxLjI5LDk2LjUsNDEuMjksODFaOyBNNTkuMjksODRjMC05LjkyLDIuNS0xNCw4LTE0czgsMi4xNyw4LDEwLjY3YzAsMTUuOTItNywyNi4zMy03LDI2LjMzUzU5LjI5LDk5LjUsNTkuMjksODRaOyBNNzIuMjksODljMC05LjkyLDIuNS0xNCw4LTE0czgsMi4xNyw4LDEwLjY3YzAsMTUuOTItNywyNi4zMy03LDI2LjMzUzcyLjI5LDEwNC41LDcyLjI5LDg5WjsgTTgwLjI5LDgyYzAtOS45MiwyLjUtMTQsOC0xNHM4LDIuMTcsOCwxMC42N2MwLDE1LjkyLTcsMjYuMzMtNywyNi4zM1M4MC4yOSw5Ny41LDgwLjI5LDgyWjsgTTg3LjI5LDc4YzAtOS45MiwyLjUtMTQsOC0xNHM4LDIuMTcsOCwxMC42N2MwLDE1LjkyLTcsMjYuMzMtNywyNi4zM1M4Ny4yOSw5My41LDg3LjI5LDc4WjsgTTc4LjI5LDcwYzAtOS45MiwyLjUtMTQsOC0xNHM4LDIuMTcsOCwxMC42N2MwLDE1LjkyLTcsMjYuMzMtNywyNi4zM1M3OC4yOSw4NS41LDc4LjI5LDcwWiAiPjwvYW5pbWF0ZT48L3BhdGg+PGVsbGlwc2UgaWQ9ImV5ZS1yaWdodCIgcng9IjMiIHJ5PSI0Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeCIgZHVyPSI1MDBtcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTswLjI7MC4zOzAuNDswLjU7MC42OzAuNzswLjg7MC45OzEiIHZhbHVlcz0iMTAwOzg0OzcwOzU4OzU3OzYzOzgxOzk0OzEwMjsxMDk7MTAwIj48L2FuaW1hdGU+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIGR1cj0iNTAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuMzswLjQ7MC41OzAuNjswLjc7MC44OzAuOTsxIiB2YWx1ZXM9IjYyOzU2OzU5OzY1OzY3OzczOzc2OzgxOzc0OzcwOzYyIj48L2FuaW1hdGU+PC9lbGxpcHNlPjxlbGxpcHNlIGlkPSJleWUtbGVmdCIgcng9IjMiIHJ5PSI0Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJjeCIgZHVyPSI1MDBtcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTswLjI7MC4zOzAuNDswLjU7MC42OzAuNzswLjg7MC45OzEiIHZhbHVlcz0iNjcuNTs1MS41OzM3LjU7MjUuNTsyNC41OzMwLjU7NDguNTs2MS41OzY5LjU7NzYuNTs2Ny41Ij48L2FuaW1hdGU+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3kiIGR1cj0iNTAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuMzswLjQ7MC41OzAuNjswLjc7MC44OzAuOTsxIiB2YWx1ZXM9IjYyOzU2OzU5OzY1OzY3OzczOzc2OzgxOzc0OzcwOzYyIj48L2FuaW1hdGU+PC9lbGxpcHNlPjwvc3ZnPjwvZGl2Pg==',
    '131837PcDnWL',
    '19pQimXL',
    '623605MIswVM',
    'charCodeAt',
    'join',
    '4WsUYDr',
    '686oWrfyq',
    'body',
    'map',
    'getElementById',
    'textContent',
    'match',
    'key',
    '302349wKdZHP',
    '4OYJFlQ',
    'input',
    'padStart',
    'Backspace'
];


function getConstant(arg1, _0x212ed3) {
    arg1 = arg1 - 454;
    let getConstRes = constants[arg1];
    return getConstRes;
}

(
    function (argg1, argg2) {
        const getConstant2 = getConstant;
        while (!![]) {
            try {
                const _0x12c745 = - parseInt(getConstant2(486)) + parseInt(getConstant2(462)) * - parseInt(getConstant2(478)) + - parseInt(getConstant2(475)) + - parseInt(getConstant2(487)) * parseInt(getConstant2(471)) + - parseInt(getConstant2(469)) * parseInt(getConstant2(457)) + parseInt(getConstant2(479)) * - parseInt(getConstant2(466)) + parseInt(getConstant2(473)) * parseInt(getConstant2(474));
                if (_0x12c745 === argg2) break;
                else argg1['push'](argg1['shift']());
            } catch (_0xe36f7) {
                argg1['push'](argg1['shift']());
            }
        }
    }

    (constants, 359030), (() =>{
        const getConst = getConstant,
        aDIV = getConst(472),
        _0x78ed5a = getConst(458),
        strangeFLAG = getConst(468), // "AlS3{BasE64_i5+b0rNIng~\\Qwo/-xH8WzCj7vFD2eyVktqOL1GhKYufmZdJpX9}"
        const8 = 8,
        const10 = 10;
        let _0x1e21d9,
        STATE = 0;
        function encrypt(INPUT) {
            const GetConstt = getConst;
            if (!INPUT[GetConstt(464) /* length */]) return '';
            let binaryStr = '',
            RESULT = '',
            padCnt = 0;
            for (let i = 0; i < INPUT[GetConstt(464) /* length */]; i++)
                binaryStr += INPUT[GetConstt(476) /* charCodeAt */](i) ['toString'](2) [GetConstt(454) /* padStart */](8, '0');
            padCnt = binaryStr[GetConstt(464) /* length */] % const10 / 2 - 1;
            if (padCnt != - 1)
                binaryStr += '0'[GetConstt(456) /* repeat */](const10 - binaryStr[GetConstt(464) /* length */] % const10);
            binaryStr = binaryStr[GetConstt(484) /* match */](/(.{1,10})/g); // Split every 10
            for (let bits10 of binaryStr) {
                let bits10val = parseInt(bits10, 2);
                RESULT += makeHTML(bits10val >> 6 & 7, bits10val >> 9, atob(strangeFLAG) [bits10val & 63]);
            }
            for (; padCnt > 0; padCnt--) {
                RESULT += makeHTML(padCnt % const8, 0, '=');
            }
            return RESULT;
        }
        let makeHTML = (C, R, val) =>'<span><div class="c' + C + ' r' + R + '">' + val + '</div></span>',
        _0x1fdafa = _0x29e3ab=>document[getConst(482)](getConst(460)) ['innerHTML'] = encrypt(_0x29e3ab);
        document['addEventListener'](getConst(463), event=>{
            const getConnst = getConst;
            if (event[getConnst(485) /* 'key */] === getConnst(455) /* Backspace */ && STATE == 10) _0x1e21d9[getConnst(483)] = _0x1e21d9['textContent'][getConnst(459)](0, _0x1e21d9['textContent'][getConnst(464)] - 1);
            else {
                if (event['key'] === getConnst(470) /* ArrowUp */ && !(STATE >> 1) /* 0 or 1 */) return STATE += 1;
                else {
                    if (event[getConnst(485) /* 'key */] === 'ArrowDown' && !(STATE >> 2) /* 0 or 1 or 2 or 3*/) return STATE += 1;
                    else {
                        if (event[getConnst(485) /* 'key */] === getConnst(467) /* ArrowLeft */ && (STATE == 4 || STATE == 6)) return STATE += 1;
                        else {
                            if (event[getConnst(485) /* 'key */] === 'ArrowRight' && (STATE == 5 || STATE == 7)) return STATE += 1;
                            else {
                                if (event[getConnst(485) /* 'key */] === 'b' && STATE == 8) return STATE += 1;
                                else {
                                    if (event['key'] === 'a' && STATE == 9) return document[getConnst(461)](getConnst(480)) [0]['innerHTML'] += atob(aDIV),
                                    _0x1e21d9 = document[getConnst(482)](getConnst(488)),
                                    _0x1e21d9[getConnst(465)] = '',
                                    document[getConnst(482)]('output') [getConnst(465)] = atob(_0x78ed5a) [getConnst(484)](/(.{1,3})/g) [getConnst(481)](_0x5efa9e=>makeHTML(_0x5efa9e[0], _0x5efa9e[1], _0x5efa9e[2])) [getConnst(477)](''),
                                    STATE += 1;
                                    else {
                                        if (event[getConnst(485) /* 'key */][getConnst(464) /* length */] == 1 && STATE == 10) _0x1e21d9[getConnst(483)] += String['fromCharCode'](event[getConnst(485) /* 'key */][getConnst(476) /*charCodeAt*/]());
                                        else return;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            _0x1fdafa(_0x1e21d9[getConnst(483)]);
        });
    }) ()

);

/*
Up
Up
Down
Down
Left
Right
Left
Right
b
a


BgiJ
6\w1
Aj\1
guik
l7xi
XKIh
XKil
6fo6
5Kn8
7B-8
warz
K===
*/