# Unocss Preset columns

A dead-simple uno preset that adds a new unit to unocss, the "c" unit, that is equal to the size of a column.

For example, if your design has 14 columns, px-1c will generate the following styles:

```css
.px-1c {
  padding-left: 7.1428571429vw; // 1/14 * 100vw
  padding-right: 7.1428571429vw;
}
```
