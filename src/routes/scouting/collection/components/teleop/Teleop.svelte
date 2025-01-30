<script>
    import { scoutingData } from "$lib/stores";

    const TeleDecCoral1 = () => {
        if($scoutingData.teleCoral1 > 0){
            $scoutingData.teleCoral1--;
        }
    }
    const TeleDecCoral2 = () => {
        if($scoutingData.teleCoral2 > 0){
            $scoutingData.teleCoral2--;
        }
    }
    const TeleDecCoral3 = () => {
        if($scoutingData.teleCoral3 > 0){
            $scoutingData.teleCoral3--;
        }
    }
    const TeleDecCoral4 = () => {
        if($scoutingData.teleCoral4 > 0){
            $scoutingData.teleCoral4--;
        }
    }
    const TeleDecAlgae = () => {
        if($scoutingData.teleAlgaeScored > 0){
            $scoutingData.teleAlgaeScored--;
        }

    }
</script>

<div class="flex">
    <p class ="mx-1 scale-text-small font-semibold text-w">Match {$scoutingData.matchid} Team</p>
    <p class ={`scale-text-small font-semibold ${$scoutingData.teamcolor ? "text-blue-alliance" : "text-red-alliance"}`}>{$scoutingData.teamid}</p>
</div>

<div class="flex mb-3 justify-center">
    <h1 class="flex flex-col justify-center text-w scale-text-large font-semibold">Tele-Op Scoring</h1>
</div>

<div class="flex text-w mx-4 mt-6 justify-center text-center">
    <span class="flex flex-col justify-center text-w scale-text font-semibold w-1/2">Coral 1 Scored</span>
    <div class="inline-flex w-1/2">
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={TeleDecCoral1}>-</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.teleCoral1}</p>
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={() => $scoutingData.teleCoral1++}>+</button>
            </div>
        </div>
    </div>
</div>

<div class="flex text-w mx-4 mt-6 justify-center text-center">
    <span class="flex flex-col justify-center text-w scale-text font-semibold w-1/2">Coral 2 Scored</span>
    <div class="inline-flex w-1/2">
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={TeleDecCoral2}>-</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.teleCoral2}</p>
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={() => $scoutingData.teleCoral2++}>+</button>
            </div>
        </div>
    </div>
</div>

<div class="flex text-w mx-4 mt-6 justify-center text-center">
    <span class="flex flex-col justify-center text-w scale-text font-semibold w-1/2">Coral 3 Scored</span>
    <div class="inline-flex w-1/2">
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={TeleDecCoral3}>-</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.teleCoral3}</p>
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={() => $scoutingData.teleCoral3++}>+</button>
            </div>
        </div>
    </div>
</div>

<div class="flex text-w mx-4 mt-6 justify-center text-center">
    <span class="flex flex-col justify-center text-w scale-text font-semibold w-1/2">Coral 4 Scored</span>
    <div class="inline-flex w-1/2">
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={TeleDecCoral4}>-</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.teleCoral4}</p>
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={() => $scoutingData.teleCoral4++}>+</button>
            </div>
        </div>
    </div>
</div>

<div class="flex text-w mx-4 mt-6 justify-center text-center">
    <span class="flex flex-col justify-center text-w scale-text font-semibold w-1/2">Algae Scored</span>
    <div class="inline-flex w-1/2">
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={TeleDecAlgae}>-</button>
            </div>
        </div>

        <p class="text-w my-auto scale-text-large font-thin w-1/3 text-center">{$scoutingData.teleAlgaeScored}</p>
        <div class="w-1/3">
            <div class="text-center">
            <button class="appearance-none rounded shadow-sm bg-active dynMarg-small px-4 py-1 scale-text"
            on:click={() => $scoutingData.teleAlgaeScored++}>+</button>
            </div>
        </div>
    </div>
</div>

<div class="flex mx-4 my-8 justify-center">
    <div class="flex flex-row w-2/3">
        <label for="algaeCapable" class="flex flex-col justify-center text-w scale-text font-semibold w-5/6">Can Manipulate Algae</label>
        <input name="algaeCapable"
                type="checkbox"
                bind:checked={$scoutingData.teleAlgaeCapable}
                class="testcheck:tog checked:bg-active bg-inactive">
    </div>
</div>

<style>
    .dynMarg-small {
        margin: 3vw;
    }

    .scale-text-small {
        font-size : 4vw;
    }

    .scale-text {
        font-size : 5vw;
    }

    .scale-text-large {
        font-size : 9vw;
    }


    .testcheck\:tog:not(:checked),
    .testcheck\:tog:checked {
        appearance: none;
        border-radius: 0.25rem;
        width: 10vw;
        height: 10vw;
        margin-left: auto;
        margin-right: 0;
        text-align: center;
    }

    .testcheck\:tog:not(:checked)::before,
    .testcheck\:tog:checked::before {
        content: "";
    }

    .testcheck\:tog:not(:checked)::after,
    .testcheck\:tog:checked::after {
        content: "✓";
        font-size: 7vw;
        color: rgb(255 255 255);
        transition: all .2s;
    }

    .testcheck\:tog:not(:checked)::after {
        opacity: 0;
    }

    .testcheck\:tog:checked::after {
        opacity: 1;
    }
</style>