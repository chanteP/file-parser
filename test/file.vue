<script setup lang="ts">
import { onMounted, ref, type Ref, computed } from 'vue';
import { parse } from '../src';

const fileFormat = `
#header
magic,4, string
version,4, number
length,4, number

#part
chunkLength, 4, number
chunkType, 4, string

if(chunkType is 'JSON') ## json
data,\${chunkLength}, string

if(chunkType is 'BIN') ## bin
data,\${chunkLength}

`;

// const fileFormat = `
// magic

// `;

async function dropFile(e: DragEvent) {
    e.preventDefault();

    const file = e.dataTransfer?.files[0];
    if (!file) {
        return;
    }
    const rs = await parse(fileFormat, file);

    console.log('final----', rs);
}
</script>

<template>
    <div class="content" @dragover.prevent @drop="dropFile"></div>
</template>

<style scoped lang="scss">
.content {
    min-height: 100vh;
    background: #f0f0f0;
}
</style>
