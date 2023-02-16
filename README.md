# 自用 file parser

```js
import { Parser, APNG } from 'xxx';

new Parser().add(file).format(APNG).parse();

new Parser().add(file).format`
#header
field1, 4
field2, 4
`.parse();

new Parser({
    maxLoop: 10000,
});

parser.addFileFormat('jpg', `...`);
parser.addDataFormat('numberOffset1', (data) => +data + 1);
```

##

```
# group
## group

fieldName, length, dataFormat
fieldName, >length, dataFormat
fieldName, <length, dataFormat

fieldName, [offsetStart, offsetEnd]
fieldName, length, dataFormat | dataFormat

\${fieldValueWithDataFormat}
\${fieldValueWithDataFormat + offset}
\${fieldValueWithDataFormat - offset}

while(byteValue): # group
if(var, matchData): # group
loop(numberValue): # group

back(numberValue)
next(numberValue)
goto(numberValue)
find(byteValue)
backFind(byteValue)

stringValue: 'string' "string"
byteValue: [00 0F AF]
numberValue: 123

// comment
/* comment */

```
