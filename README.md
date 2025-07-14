# when-resolved

```html
<button name=dirPick disabled>Pick directory</button>

<details itemscope=dir when-resolved="@dirPick+🗃️ then => $0?.ish?.🗃️">
    <summary itemprop=name></summary>
</details>
```