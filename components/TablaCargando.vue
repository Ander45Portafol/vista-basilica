<template>
    <div class="loadingtable overflow-hidden h-full pr-4">
        <div class="contained-data flex-col" v-for="number in 6" :key="number">
            <div
                class="border-4 border-slate-300 animate-pulse flex justify-between mt-4 rounded-xl p-4 max-[400px]:flex-wrap max-[400px]:w-full min-w-[200px]">
                <div class="flex justify-start w-3/4 items-center max-[400px]:w-full">
                    <div class="h-16 w-16 bg-slate-300 mr-5 rounded-2xl max-[600px]:hidden"></div>
                    <div class="datainfo flex-col max-[400px] p-0 w-full ml-0 mt-2 text-center">
                        <div
                            class="h-4 bg-slate-300 rounded-full dark:bg-gray-700 w-48 max-[450px]:w-40 max-[400px]:w-full mb-4">
                        </div>
                        <div class="h-3 bg-slate-300 rounded-full dark:bg-gray-700 w-1/2 mb-2.5 max-[400px]:w-full">
                        </div>
                    </div>
                </div>
                <div
                    class="buttons-data flex justify-center items-center max-[750px]:flex-col max-[400px]:flex-row max-[400px]:m-auto max-[400px]:mt-2">
                    <div
                        class="bg-slate-300 h-10 w-10 ml-4 rounded-md flex items-center justify-center max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:ml-2">
                    </div>
                    <div
                        class="bg-slate-300 h-10 w-10 ml-4 rounded-md flex items-center justify-center max-[750px]:ml-0 max-[750px]:mt-2 max-[400px]:mt-0 max-[400px]:ml-8">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>