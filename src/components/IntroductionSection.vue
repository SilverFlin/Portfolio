<template>
    <div class="flex bg-[#D3CEC4] w-full h-screen justify-between min-h-screen max-h-screen overflow-hidden">
        <div class="flex w-1/2 flex-col justify-evenly items-center">
            <h1 class="text-9xl text-center">I'm Luis Toledo</h1>
            <p class="text-5xl text-center">A software engineer</p>
        </div>
        <div class="w-1/2 h-full bg-inherit bg-center bg-contain bg-no-repeat scale-x-[-1]"
            :style="{ backgroundImage: `url(/src/assets/images/introduction.png)` }">

        </div>

    </div>
</template>