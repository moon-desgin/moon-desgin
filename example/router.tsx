import React, { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import { Demo1 } from './demo'

interface _MenuObject extends Record<string, any> {
	name?: string
}

export type MenuObject = RouteObject & _MenuObject

const list = [
	'button',
	// 'virtualList',
	'input',
	// 'detail',
	// 'progress',
	'select',
	// 'richText',
	'textarea',
	// 'dialog',
	'form',
].map(name => {
	return {
		name,
		path: '/' + name,
		element: <Suspense fallback={<div>Loading</div>}>
			{React.createElement(lazy(() => import(`../src/${name}/__test__`)))}
		</Suspense>
	}
})

export const menu: MenuObject[] = [
{
	path: '/',
	element: <Demo1 />
},
].concat(list)

export const routers: RouteObject[] = Array.from(menu, (item: MenuObject) => ({ path: item.path, element: item.element }))

