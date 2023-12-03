<template>
    <div class="mt-8">
        <div class="container max-w-screen-xl mx-auto px-4">
            <div class="grid grid-cols-2 text-center mt-8 ">
                <div class="flex flex-col items-center justify-center">
                    <h1 class="font-semibold text-gray-900 text-8xl leading-normal mb-6">DECEMBER 7</h1>
                    <h2 class="text-4xl">PEACOCK THEATER, LOS ANGELES</h2>
                    <div class="flex py-4">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Add event to calendar 
                        </button>
                        <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-4 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                            Vote now
                        </button>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <CardsCardSimple :text="card_text" :title="card_title"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            card_text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            card_title: 'Noteworthy technology acquisitions 2021'
        }
    }
}
</script>
