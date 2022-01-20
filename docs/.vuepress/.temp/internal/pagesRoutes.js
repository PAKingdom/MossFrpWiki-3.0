import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-ec5af490","/beforeask.html",{"title":"提问前你必须知道的"},["/beforeask","/beforeask.md"]],
  ["v-8daa1a0e","/",{"title":"欢迎来到 MossFrp Wiki！"},["/index.html","/readme.md"]],
  ["v-8c767160","/client/linux.html",{"title":"Linux 客户端 使用方法"},["/client/linux","/client/linux.md"]],
  ["v-556c0861","/client/windows.html",{"title":"Windows 客户端 使用方法"},["/client/windows","/client/windows.md"]],
  ["v-751eaaa6","/help/collection.html",{"title":"问题集合"},["/help/collection","/help/collection.md"]],
  ["v-3f1ee8ab","/help/main.html",{"title":"最常问的问题"},["/help/main","/help/main.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
