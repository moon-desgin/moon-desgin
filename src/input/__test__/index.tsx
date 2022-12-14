{/* <input id="num" inputmode="numeric">
<input id="email" inputmode="email">
<input id="tel" inputmode="tel">
<input id="url" inputmode="url" type="url"> */}


/**
 颜色拾取器
<input type="color" value="#e0ffee" id="colorPicker">
<b>Current color code: <code id="colorCode"></code></b>

<script>
colorPicker.addEventListener("input", setColor);

function setColor() {
	body.style.backgroundColor = input.value;
	colorCode.innerHTML = input.value;
}
</script>
 */
import React from "react"
import { Input } from '..'

export default function InputTestCmp() {
	return <>
		<div>
			<Input />
		</div>
		<div>
			<Input onChange={(e: any) => {
				console.log(e.target.value)
			}} />
		</div>
	</>
}
