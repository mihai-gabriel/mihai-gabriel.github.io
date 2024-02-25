<script>
  const keymaps = [
    [
      { id: '1', symbol: '1', extraStyling: '' },
      { id: '2', symbol: '2', extraStyling: '' },
      { id: '3', symbol: '3', extraStyling: '' },
      { id: '4', symbol: '4', extraStyling: '' },
      { id: '5', symbol: '5', extraStyling: '' },
      { id: '6', symbol: '6', extraStyling: '' },
      { id: '7', symbol: '7', extraStyling: '' },
      { id: '8', symbol: '8', extraStyling: '' },
      { id: '9', symbol: '9', extraStyling: '' },
      { id: '0', symbol: '0', extraStyling: '' },
      { id: '-', symbol: '-', extraStyling: '' }
    ],
    [
      { id: 'q', symbol: 'q', extraStyling: 'ml-4' },
      { id: 'w', symbol: 'w', extraStyling: '' },
      { id: 'e', symbol: 'e', extraStyling: '' },
      { id: 'r', symbol: 'r', extraStyling: '' },
      { id: 't', symbol: 't', extraStyling: '' },
      { id: 'y', symbol: 'y', extraStyling: '' },
      { id: 'u', symbol: 'u', extraStyling: '' },
      { id: 'i', symbol: 'i', extraStyling: '' },
      { id: 'o', symbol: 'o', extraStyling: '' },
      { id: 'p', symbol: 'p', extraStyling: '' }
    ],
    [
      { id: 'a', symbol: 'a', extraStyling: 'ml-8' },
      { id: 's', symbol: 's', extraStyling: '' },
      { id: 'd', symbol: 'd', extraStyling: '' },
      { id: 'f', symbol: 'f', extraStyling: '' },
      { id: 'g', symbol: 'g', extraStyling: '' },
      { id: 'h', symbol: 'h', extraStyling: '' },
      { id: 'j', symbol: 'j', extraStyling: '' },
      { id: 'k', symbol: 'k', extraStyling: '' },
      { id: 'l', symbol: 'l', extraStyling: '' },
      { id: 'Enter', symbol: '↵', extraStyling: '!px-6' }
    ],
    [
      { id: '⇧', symbol: '⇧', extraStyling: '!px-4 -ml-2' },
      { id: 'z', symbol: 'z', extraStyling: '' },
      { id: 'x', symbol: 'x', extraStyling: '' },
      { id: 'c', symbol: 'c', extraStyling: '' },
      { id: 'v', symbol: 'v', extraStyling: '' },
      { id: 'b', symbol: 'b', extraStyling: '' },
      { id: 'n', symbol: 'n', extraStyling: '' },
      { id: 'm', symbol: 'm', extraStyling: '' },
      { id: ',', symbol: ',', extraStyling: '' },
      { id: '.', symbol: '.', extraStyling: '' },
      { id: '/', symbol: '/', extraStyling: '' },
      { id: 'Shift', symbol: '⇧', extraStyling: '!px-4' }
    ],
    [
      { id: 'Alt', symbol: 'Alt', extraStyling: 'ml-2' },
      { id: ' ', symbol: '⎵', extraStyling: '!px-28' },
      { id: 'Fn', symbol: 'Fn', extraStyling: '' },
      { id: 'Ctrl', symbol: 'Ctrl', extraStyling: '' }
    ]
  ];

  export let pressedKey = '';
</script>

<div class="flex select-none flex-col space-y-1">
  {#each keymaps as keymap}
    <div class="flex flex-row space-x-1">
      {#each keymap as key}
        <kbd
          class="text-md rounded-md bg-slate-100 px-2.5 py-1 font-space transition-all dark:bg-slate-600 {key.extraStyling}"
          class:!bg-slate-400={pressedKey.toLowerCase() === key.id}
          class:!text-white={pressedKey.toLowerCase() === key.id}
        >
          {key.symbol}
        </kbd>
      {/each}
    </div>
  {/each}
</div>
