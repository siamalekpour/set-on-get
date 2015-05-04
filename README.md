# set-on-get
Small JavaScript function to add a parameter to the current page URI

Common checks are:
* Remove previous param if present
* Add requested param to the end of the current URI

## Usage:
Include script in your HTML file and call the `setOnGet()` function passing a variable name as string and the desired value for it.
```javascript
setOnGet('myparam', 123);
```
