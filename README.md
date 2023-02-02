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

${fieldValueWithDataFormat}

while(matchData)# group
if(data, equalValue)# group
loop(count)# group

[repeatCount]fieldName, ...


```
