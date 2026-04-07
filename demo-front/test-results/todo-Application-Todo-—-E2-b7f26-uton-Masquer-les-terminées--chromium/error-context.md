# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: todo.spec.ts >> Application Todo — E2E >> nettoie les todos completed via le bouton "Masquer les terminées"
- Location: e2e\todo.spec.ts:145:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 110
Received: 200
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - heading "Ma liste de todos" [level=1] [ref=e5]
  - paragraph [ref=e6]: 90 terminé(s) / 110 en attente
  - generic [ref=e7]:
    - textbox "Nouvelle tâche…" [ref=e8]
    - button "Ajouter" [disabled] [ref=e9] [cursor=pointer]
  - list [ref=e10]:
    - listitem [ref=e11]:
      - checkbox [ref=e12]
      - generic [ref=e13]: delectus aut autem
      - button "Supprimer" [ref=e14] [cursor=pointer]
    - listitem [ref=e15]:
      - checkbox [ref=e16]
      - generic [ref=e17]: quis ut nam facilis et officia qui
      - button "Supprimer" [ref=e18] [cursor=pointer]
    - listitem [ref=e19]:
      - checkbox [ref=e20]
      - generic [ref=e21]: fugiat veniam minus
      - button "Supprimer" [ref=e22] [cursor=pointer]
    - listitem [ref=e23]:
      - checkbox [checked] [ref=e24]
      - generic [ref=e25]: et porro tempora
      - button "Supprimer" [ref=e26] [cursor=pointer]
    - listitem [ref=e27]:
      - checkbox [ref=e28]
      - generic [ref=e29]: laboriosam mollitia et enim quasi adipisci quia provident illum
      - button "Supprimer" [ref=e30] [cursor=pointer]
    - listitem [ref=e31]:
      - checkbox [ref=e32]
      - generic [ref=e33]: qui ullam ratione quibusdam voluptatem quia omnis
      - button "Supprimer" [ref=e34] [cursor=pointer]
    - listitem [ref=e35]:
      - checkbox [ref=e36]
      - generic [ref=e37]: illo expedita consequatur quia in
      - button "Supprimer" [ref=e38] [cursor=pointer]
    - listitem [ref=e39]:
      - checkbox [checked] [ref=e40]
      - generic [ref=e41]: quo adipisci enim quam ut ab
      - button "Supprimer" [ref=e42] [cursor=pointer]
    - listitem [ref=e43]:
      - checkbox [ref=e44]
      - generic [ref=e45]: molestiae perspiciatis ipsa
      - button "Supprimer" [ref=e46] [cursor=pointer]
    - listitem [ref=e47]:
      - checkbox [checked] [ref=e48]
      - generic [ref=e49]: illo est ratione doloremque quia maiores aut
      - button "Supprimer" [ref=e50] [cursor=pointer]
    - listitem [ref=e51]:
      - checkbox [checked] [ref=e52]
      - generic [ref=e53]: vero rerum temporibus dolor
      - button "Supprimer" [ref=e54] [cursor=pointer]
    - listitem [ref=e55]:
      - checkbox [checked] [ref=e56]
      - generic [ref=e57]: ipsa repellendus fugit nisi
      - button "Supprimer" [ref=e58] [cursor=pointer]
    - listitem [ref=e59]:
      - checkbox [ref=e60]
      - generic [ref=e61]: et doloremque nulla
      - button "Supprimer" [ref=e62] [cursor=pointer]
    - listitem [ref=e63]:
      - checkbox [checked] [ref=e64]
      - generic [ref=e65]: repellendus sunt dolores architecto voluptatum
      - button "Supprimer" [ref=e66] [cursor=pointer]
    - listitem [ref=e67]:
      - checkbox [checked] [ref=e68]
      - generic [ref=e69]: ab voluptatum amet voluptas
      - button "Supprimer" [ref=e70] [cursor=pointer]
    - listitem [ref=e71]:
      - checkbox [checked] [ref=e72]
      - generic [ref=e73]: accusamus eos facilis sint et aut voluptatem
      - button "Supprimer" [ref=e74] [cursor=pointer]
    - listitem [ref=e75]:
      - checkbox [checked] [ref=e76]
      - generic [ref=e77]: quo laboriosam deleniti aut qui
      - button "Supprimer" [ref=e78] [cursor=pointer]
    - listitem [ref=e79]:
      - checkbox [ref=e80]
      - generic [ref=e81]: dolorum est consequatur ea mollitia in culpa
      - button "Supprimer" [ref=e82] [cursor=pointer]
    - listitem [ref=e83]:
      - checkbox [checked] [ref=e84]
      - generic [ref=e85]: molestiae ipsa aut voluptatibus pariatur dolor nihil
      - button "Supprimer" [ref=e86] [cursor=pointer]
    - listitem [ref=e87]:
      - checkbox [checked] [ref=e88]
      - generic [ref=e89]: ullam nobis libero sapiente ad optio sint
      - button "Supprimer" [ref=e90] [cursor=pointer]
    - listitem [ref=e91]:
      - checkbox [ref=e92]
      - generic [ref=e93]: suscipit repellat esse quibusdam voluptatem incidunt
      - button "Supprimer" [ref=e94] [cursor=pointer]
    - listitem [ref=e95]:
      - checkbox [checked] [ref=e96]
      - generic [ref=e97]: distinctio vitae autem nihil ut molestias quo
      - button "Supprimer" [ref=e98] [cursor=pointer]
    - listitem [ref=e99]:
      - checkbox [ref=e100]
      - generic [ref=e101]: et itaque necessitatibus maxime molestiae qui quas velit
      - button "Supprimer" [ref=e102] [cursor=pointer]
    - listitem [ref=e103]:
      - checkbox [ref=e104]
      - generic [ref=e105]: adipisci non ad dicta qui amet quaerat doloribus ea
      - button "Supprimer" [ref=e106] [cursor=pointer]
    - listitem [ref=e107]:
      - checkbox [checked] [ref=e108]
      - generic [ref=e109]: voluptas quo tenetur perspiciatis explicabo natus
      - button "Supprimer" [ref=e110] [cursor=pointer]
    - listitem [ref=e111]:
      - checkbox [checked] [ref=e112]
      - generic [ref=e113]: aliquam aut quasi
      - button "Supprimer" [ref=e114] [cursor=pointer]
    - listitem [ref=e115]:
      - checkbox [checked] [ref=e116]
      - generic [ref=e117]: veritatis pariatur delectus
      - button "Supprimer" [ref=e118] [cursor=pointer]
    - listitem [ref=e119]:
      - checkbox [ref=e120]
      - generic [ref=e121]: nesciunt totam sit blanditiis sit
      - button "Supprimer" [ref=e122] [cursor=pointer]
    - listitem [ref=e123]:
      - checkbox [ref=e124]
      - generic [ref=e125]: laborum aut in quam
      - button "Supprimer" [ref=e126] [cursor=pointer]
    - listitem [ref=e127]:
      - checkbox [checked] [ref=e128]
      - generic [ref=e129]: nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis
      - button "Supprimer" [ref=e130] [cursor=pointer]
    - listitem [ref=e131]:
      - checkbox [ref=e132]
      - generic [ref=e133]: repudiandae totam in est sint facere fuga
      - button "Supprimer" [ref=e134] [cursor=pointer]
    - listitem [ref=e135]:
      - checkbox [ref=e136]
      - generic [ref=e137]: earum doloribus ea doloremque quis
      - button "Supprimer" [ref=e138] [cursor=pointer]
    - listitem [ref=e139]:
      - checkbox [ref=e140]
      - generic [ref=e141]: sint sit aut vero
      - button "Supprimer" [ref=e142] [cursor=pointer]
    - listitem [ref=e143]:
      - checkbox [ref=e144]
      - generic [ref=e145]: porro aut necessitatibus eaque distinctio
      - button "Supprimer" [ref=e146] [cursor=pointer]
    - listitem [ref=e147]:
      - checkbox [checked] [ref=e148]
      - generic [ref=e149]: repellendus veritatis molestias dicta incidunt
      - button "Supprimer" [ref=e150] [cursor=pointer]
    - listitem [ref=e151]:
      - checkbox [checked] [ref=e152]
      - generic [ref=e153]: excepturi deleniti adipisci voluptatem et neque optio illum ad
      - button "Supprimer" [ref=e154] [cursor=pointer]
    - listitem [ref=e155]:
      - checkbox [ref=e156]
      - generic [ref=e157]: sunt cum tempora
      - button "Supprimer" [ref=e158] [cursor=pointer]
    - listitem [ref=e159]:
      - checkbox [ref=e160]
      - generic [ref=e161]: totam quia non
      - button "Supprimer" [ref=e162] [cursor=pointer]
    - listitem [ref=e163]:
      - checkbox [ref=e164]
      - generic [ref=e165]: doloremque quibusdam asperiores libero corrupti illum qui omnis
      - button "Supprimer" [ref=e166] [cursor=pointer]
    - listitem [ref=e167]:
      - checkbox [checked] [ref=e168]
      - generic [ref=e169]: totam atque quo nesciunt
      - button "Supprimer" [ref=e170] [cursor=pointer]
    - listitem [ref=e171]:
      - checkbox [ref=e172]
      - generic [ref=e173]: aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit
      - button "Supprimer" [ref=e174] [cursor=pointer]
    - listitem [ref=e175]:
      - checkbox [ref=e176]
      - generic [ref=e177]: rerum perferendis error quia ut eveniet
      - button "Supprimer" [ref=e178] [cursor=pointer]
    - listitem [ref=e179]:
      - checkbox [checked] [ref=e180]
      - generic [ref=e181]: tempore ut sint quis recusandae
      - button "Supprimer" [ref=e182] [cursor=pointer]
    - listitem [ref=e183]:
      - checkbox [checked] [ref=e184]
      - generic [ref=e185]: cum debitis quis accusamus doloremque ipsa natus sapiente omnis
      - button "Supprimer" [ref=e186] [cursor=pointer]
    - listitem [ref=e187]:
      - checkbox [ref=e188]
      - generic [ref=e189]: velit soluta adipisci molestias reiciendis harum
      - button "Supprimer" [ref=e190] [cursor=pointer]
    - listitem [ref=e191]:
      - checkbox [ref=e192]
      - generic [ref=e193]: vel voluptatem repellat nihil placeat corporis
      - button "Supprimer" [ref=e194] [cursor=pointer]
    - listitem [ref=e195]:
      - checkbox [ref=e196]
      - generic [ref=e197]: nam qui rerum fugiat accusamus
      - button "Supprimer" [ref=e198] [cursor=pointer]
    - listitem [ref=e199]:
      - checkbox [ref=e200]
      - generic [ref=e201]: sit reprehenderit omnis quia
      - button "Supprimer" [ref=e202] [cursor=pointer]
    - listitem [ref=e203]:
      - checkbox [ref=e204]
      - generic [ref=e205]: ut necessitatibus aut maiores debitis officia blanditiis velit et
      - button "Supprimer" [ref=e206] [cursor=pointer]
    - listitem [ref=e207]:
      - checkbox [checked] [ref=e208]
      - generic [ref=e209]: cupiditate necessitatibus ullam aut quis dolor voluptate
      - button "Supprimer" [ref=e210] [cursor=pointer]
    - listitem [ref=e211]:
      - checkbox [ref=e212]
      - generic [ref=e213]: distinctio exercitationem ab doloribus
      - button "Supprimer" [ref=e214] [cursor=pointer]
    - listitem [ref=e215]:
      - checkbox [ref=e216]
      - generic [ref=e217]: nesciunt dolorum quis recusandae ad pariatur ratione
      - button "Supprimer" [ref=e218] [cursor=pointer]
    - listitem [ref=e219]:
      - checkbox [ref=e220]
      - generic [ref=e221]: qui labore est occaecati recusandae aliquid quam
      - button "Supprimer" [ref=e222] [cursor=pointer]
    - listitem [ref=e223]:
      - checkbox [checked] [ref=e224]
      - generic [ref=e225]: quis et est ut voluptate quam dolor
      - button "Supprimer" [ref=e226] [cursor=pointer]
    - listitem [ref=e227]:
      - checkbox [checked] [ref=e228]
      - generic [ref=e229]: voluptatum omnis minima qui occaecati provident nulla voluptatem ratione
      - button "Supprimer" [ref=e230] [cursor=pointer]
    - listitem [ref=e231]:
      - checkbox [checked] [ref=e232]
      - generic [ref=e233]: deleniti ea temporibus enim
      - button "Supprimer" [ref=e234] [cursor=pointer]
    - listitem [ref=e235]:
      - checkbox [ref=e236]
      - generic [ref=e237]: pariatur et magnam ea doloribus similique voluptatem rerum quia
      - button "Supprimer" [ref=e238] [cursor=pointer]
    - listitem [ref=e239]:
      - checkbox [ref=e240]
      - generic [ref=e241]: est dicta totam qui explicabo doloribus qui dignissimos
      - button "Supprimer" [ref=e242] [cursor=pointer]
    - listitem [ref=e243]:
      - checkbox [ref=e244]
      - generic [ref=e245]: perspiciatis velit id laborum placeat iusto et aliquam odio
      - button "Supprimer" [ref=e246] [cursor=pointer]
    - listitem [ref=e247]:
      - checkbox [checked] [ref=e248]
      - generic [ref=e249]: et sequi qui architecto ut adipisci
      - button "Supprimer" [ref=e250] [cursor=pointer]
    - listitem [ref=e251]:
      - checkbox [checked] [ref=e252]
      - generic [ref=e253]: odit optio omnis qui sunt
      - button "Supprimer" [ref=e254] [cursor=pointer]
    - listitem [ref=e255]:
      - checkbox [ref=e256]
      - generic [ref=e257]: et placeat et tempore aspernatur sint numquam
      - button "Supprimer" [ref=e258] [cursor=pointer]
    - listitem [ref=e259]:
      - checkbox [checked] [ref=e260]
      - generic [ref=e261]: doloremque aut dolores quidem fuga qui nulla
      - button "Supprimer" [ref=e262] [cursor=pointer]
    - listitem [ref=e263]:
      - checkbox [ref=e264]
      - generic [ref=e265]: voluptas consequatur qui ut quia magnam nemo esse
      - button "Supprimer" [ref=e266] [cursor=pointer]
    - listitem [ref=e267]:
      - checkbox [ref=e268]
      - generic [ref=e269]: fugiat pariatur ratione ut asperiores necessitatibus magni
      - button "Supprimer" [ref=e270] [cursor=pointer]
    - listitem [ref=e271]:
      - checkbox [ref=e272]
      - generic [ref=e273]: rerum eum molestias autem voluptatum sit optio
      - button "Supprimer" [ref=e274] [cursor=pointer]
    - listitem [ref=e275]:
      - checkbox [ref=e276]
      - generic [ref=e277]: quia voluptatibus voluptatem quos similique maiores repellat
      - button "Supprimer" [ref=e278] [cursor=pointer]
    - listitem [ref=e279]:
      - checkbox [ref=e280]
      - generic [ref=e281]: aut id perspiciatis voluptatem iusto
      - button "Supprimer" [ref=e282] [cursor=pointer]
    - listitem [ref=e283]:
      - checkbox [ref=e284]
      - generic [ref=e285]: doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit
      - button "Supprimer" [ref=e286] [cursor=pointer]
    - listitem [ref=e287]:
      - checkbox [ref=e288]
      - generic [ref=e289]: ut sequi accusantium et mollitia delectus sunt
      - button "Supprimer" [ref=e290] [cursor=pointer]
    - listitem [ref=e291]:
      - checkbox [ref=e292]
      - generic [ref=e293]: aut velit saepe ullam
      - button "Supprimer" [ref=e294] [cursor=pointer]
    - listitem [ref=e295]:
      - checkbox [ref=e296]
      - generic [ref=e297]: praesentium facilis facere quis harum voluptatibus voluptatem eum
      - button "Supprimer" [ref=e298] [cursor=pointer]
    - listitem [ref=e299]:
      - checkbox [checked] [ref=e300]
      - generic [ref=e301]: sint amet quia totam corporis qui exercitationem commodi
      - button "Supprimer" [ref=e302] [cursor=pointer]
    - listitem [ref=e303]:
      - checkbox [ref=e304]
      - generic [ref=e305]: expedita tempore nobis eveniet laborum maiores
      - button "Supprimer" [ref=e306] [cursor=pointer]
    - listitem [ref=e307]:
      - checkbox [ref=e308]
      - generic [ref=e309]: occaecati adipisci est possimus totam
      - button "Supprimer" [ref=e310] [cursor=pointer]
    - listitem [ref=e311]:
      - checkbox [checked] [ref=e312]
      - generic [ref=e313]: sequi dolorem sed
      - button "Supprimer" [ref=e314] [cursor=pointer]
    - listitem [ref=e315]:
      - checkbox [ref=e316]
      - generic [ref=e317]: maiores aut nesciunt delectus exercitationem vel assumenda eligendi at
      - button "Supprimer" [ref=e318] [cursor=pointer]
    - listitem [ref=e319]:
      - checkbox [ref=e320]
      - generic [ref=e321]: reiciendis est magnam amet nemo iste recusandae impedit quaerat
      - button "Supprimer" [ref=e322] [cursor=pointer]
    - listitem [ref=e323]:
      - checkbox [checked] [ref=e324]
      - generic [ref=e325]: eum ipsa maxime ut
      - button "Supprimer" [ref=e326] [cursor=pointer]
    - listitem [ref=e327]:
      - checkbox [checked] [ref=e328]
      - generic [ref=e329]: tempore molestias dolores rerum sequi voluptates ipsum consequatur
      - button "Supprimer" [ref=e330] [cursor=pointer]
    - listitem [ref=e331]:
      - checkbox [checked] [ref=e332]
      - generic [ref=e333]: suscipit qui totam
      - button "Supprimer" [ref=e334] [cursor=pointer]
    - listitem [ref=e335]:
      - checkbox [ref=e336]
      - generic [ref=e337]: voluptates eum voluptas et dicta
      - button "Supprimer" [ref=e338] [cursor=pointer]
    - listitem [ref=e339]:
      - checkbox [checked] [ref=e340]
      - generic [ref=e341]: quidem at rerum quis ex aut sit quam
      - button "Supprimer" [ref=e342] [cursor=pointer]
    - listitem [ref=e343]:
      - checkbox [ref=e344]
      - generic [ref=e345]: sunt veritatis ut voluptate
      - button "Supprimer" [ref=e346] [cursor=pointer]
    - listitem [ref=e347]:
      - checkbox [checked] [ref=e348]
      - generic [ref=e349]: et quia ad iste a
      - button "Supprimer" [ref=e350] [cursor=pointer]
    - listitem [ref=e351]:
      - checkbox [checked] [ref=e352]
      - generic [ref=e353]: incidunt ut saepe autem
      - button "Supprimer" [ref=e354] [cursor=pointer]
    - listitem [ref=e355]:
      - checkbox [checked] [ref=e356]
      - generic [ref=e357]: laudantium quae eligendi consequatur quia et vero autem
      - button "Supprimer" [ref=e358] [cursor=pointer]
    - listitem [ref=e359]:
      - checkbox [ref=e360]
      - generic [ref=e361]: vitae aut excepturi laboriosam sint aliquam et et accusantium
      - button "Supprimer" [ref=e362] [cursor=pointer]
    - listitem [ref=e363]:
      - checkbox [checked] [ref=e364]
      - generic [ref=e365]: sequi ut omnis et
      - button "Supprimer" [ref=e366] [cursor=pointer]
    - listitem [ref=e367]:
      - checkbox [checked] [ref=e368]
      - generic [ref=e369]: molestiae nisi accusantium tenetur dolorem et
      - button "Supprimer" [ref=e370] [cursor=pointer]
    - listitem [ref=e371]:
      - checkbox [checked] [ref=e372]
      - generic [ref=e373]: nulla quis consequatur saepe qui id expedita
      - button "Supprimer" [ref=e374] [cursor=pointer]
    - listitem [ref=e375]:
      - checkbox [checked] [ref=e376]
      - generic [ref=e377]: in omnis laboriosam
      - button "Supprimer" [ref=e378] [cursor=pointer]
    - listitem [ref=e379]:
      - checkbox [checked] [ref=e380]
      - generic [ref=e381]: odio iure consequatur molestiae quibusdam necessitatibus quia sint
      - button "Supprimer" [ref=e382] [cursor=pointer]
    - listitem [ref=e383]:
      - checkbox [ref=e384]
      - generic [ref=e385]: facilis modi saepe mollitia
      - button "Supprimer" [ref=e386] [cursor=pointer]
    - listitem [ref=e387]:
      - checkbox [checked] [ref=e388]
      - generic [ref=e389]: vel nihil et molestiae iusto assumenda nemo quo ut
      - button "Supprimer" [ref=e390] [cursor=pointer]
    - listitem [ref=e391]:
      - checkbox [ref=e392]
      - generic [ref=e393]: nobis suscipit ducimus enim asperiores voluptas
      - button "Supprimer" [ref=e394] [cursor=pointer]
    - listitem [ref=e395]:
      - checkbox [ref=e396]
      - generic [ref=e397]: dolorum laboriosam eos qui iure aliquam
      - button "Supprimer" [ref=e398] [cursor=pointer]
    - listitem [ref=e399]:
      - checkbox [checked] [ref=e400]
      - generic [ref=e401]: debitis accusantium ut quo facilis nihil quis sapiente necessitatibus
      - button "Supprimer" [ref=e402] [cursor=pointer]
    - listitem [ref=e403]:
      - checkbox [ref=e404]
      - generic [ref=e405]: neque voluptates ratione
      - button "Supprimer" [ref=e406] [cursor=pointer]
    - listitem [ref=e407]:
      - checkbox [ref=e408]
      - generic [ref=e409]: excepturi a et neque qui expedita vel voluptate
      - button "Supprimer" [ref=e410] [cursor=pointer]
    - listitem [ref=e411]:
      - checkbox [ref=e412]
      - generic [ref=e413]: explicabo enim cumque porro aperiam occaecati minima
      - button "Supprimer" [ref=e414] [cursor=pointer]
    - listitem [ref=e415]:
      - checkbox [ref=e416]
      - generic [ref=e417]: sed ab consequatur
      - button "Supprimer" [ref=e418] [cursor=pointer]
    - listitem [ref=e419]:
      - checkbox [ref=e420]
      - generic [ref=e421]: non sunt delectus illo nulla tenetur enim omnis
      - button "Supprimer" [ref=e422] [cursor=pointer]
    - listitem [ref=e423]:
      - checkbox [ref=e424]
      - generic [ref=e425]: excepturi non laudantium quo
      - button "Supprimer" [ref=e426] [cursor=pointer]
    - listitem [ref=e427]:
      - checkbox [checked] [ref=e428]
      - generic [ref=e429]: totam quia dolorem et illum repellat voluptas optio
      - button "Supprimer" [ref=e430] [cursor=pointer]
    - listitem [ref=e431]:
      - checkbox [checked] [ref=e432]
      - generic [ref=e433]: ad illo quis voluptatem temporibus
      - button "Supprimer" [ref=e434] [cursor=pointer]
    - listitem [ref=e435]:
      - checkbox [ref=e436]
      - generic [ref=e437]: praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt
      - button "Supprimer" [ref=e438] [cursor=pointer]
    - listitem [ref=e439]:
      - checkbox [checked] [ref=e440]
      - generic [ref=e441]: a eos eaque nihil et exercitationem incidunt delectus
      - button "Supprimer" [ref=e442] [cursor=pointer]
    - listitem [ref=e443]:
      - checkbox [checked] [ref=e444]
      - generic [ref=e445]: autem temporibus harum quisquam in culpa
      - button "Supprimer" [ref=e446] [cursor=pointer]
    - listitem [ref=e447]:
      - checkbox [checked] [ref=e448]
      - generic [ref=e449]: aut aut ea corporis
      - button "Supprimer" [ref=e450] [cursor=pointer]
    - listitem [ref=e451]:
      - checkbox [ref=e452]
      - generic [ref=e453]: magni accusantium labore et id quis provident
      - button "Supprimer" [ref=e454] [cursor=pointer]
    - listitem [ref=e455]:
      - checkbox [ref=e456]
      - generic [ref=e457]: consectetur impedit quisquam qui deserunt non rerum consequuntur eius
      - button "Supprimer" [ref=e458] [cursor=pointer]
    - listitem [ref=e459]:
      - checkbox [ref=e460]
      - generic [ref=e461]: quia atque aliquam sunt impedit voluptatum rerum assumenda nisi
      - button "Supprimer" [ref=e462] [cursor=pointer]
    - listitem [ref=e463]:
      - checkbox [ref=e464]
      - generic [ref=e465]: cupiditate quos possimus corporis quisquam exercitationem beatae
      - button "Supprimer" [ref=e466] [cursor=pointer]
    - listitem [ref=e467]:
      - checkbox [ref=e468]
      - generic [ref=e469]: sed et ea eum
      - button "Supprimer" [ref=e470] [cursor=pointer]
    - listitem [ref=e471]:
      - checkbox [checked] [ref=e472]
      - generic [ref=e473]: ipsa dolores vel facilis ut
      - button "Supprimer" [ref=e474] [cursor=pointer]
    - listitem [ref=e475]:
      - checkbox [ref=e476]
      - generic [ref=e477]: sequi quae est et qui qui eveniet asperiores
      - button "Supprimer" [ref=e478] [cursor=pointer]
    - listitem [ref=e479]:
      - checkbox [ref=e480]
      - generic [ref=e481]: quia modi consequatur vero fugiat
      - button "Supprimer" [ref=e482] [cursor=pointer]
    - listitem [ref=e483]:
      - checkbox [ref=e484]
      - generic [ref=e485]: corporis ducimus ea perspiciatis iste
      - button "Supprimer" [ref=e486] [cursor=pointer]
    - listitem [ref=e487]:
      - checkbox [ref=e488]
      - generic [ref=e489]: dolorem laboriosam vel voluptas et aliquam quasi
      - button "Supprimer" [ref=e490] [cursor=pointer]
    - listitem [ref=e491]:
      - checkbox [checked] [ref=e492]
      - generic [ref=e493]: inventore aut nihil minima laudantium hic qui omnis
      - button "Supprimer" [ref=e494] [cursor=pointer]
    - listitem [ref=e495]:
      - checkbox [checked] [ref=e496]
      - generic [ref=e497]: provident aut nobis culpa
      - button "Supprimer" [ref=e498] [cursor=pointer]
    - listitem [ref=e499]:
      - checkbox [ref=e500]
      - generic [ref=e501]: esse et quis iste est earum aut impedit
      - button "Supprimer" [ref=e502] [cursor=pointer]
    - listitem [ref=e503]:
      - checkbox [ref=e504]
      - generic [ref=e505]: qui consectetur id
      - button "Supprimer" [ref=e506] [cursor=pointer]
    - listitem [ref=e507]:
      - checkbox [ref=e508]
      - generic [ref=e509]: aut quasi autem iste tempore illum possimus
      - button "Supprimer" [ref=e510] [cursor=pointer]
    - listitem [ref=e511]:
      - checkbox [checked] [ref=e512]
      - generic [ref=e513]: ut asperiores perspiciatis veniam ipsum rerum saepe
      - button "Supprimer" [ref=e514] [cursor=pointer]
    - listitem [ref=e515]:
      - checkbox [checked] [ref=e516]
      - generic [ref=e517]: voluptatem libero consectetur rerum ut
      - button "Supprimer" [ref=e518] [cursor=pointer]
    - listitem [ref=e519]:
      - checkbox [ref=e520]
      - generic [ref=e521]: eius omnis est qui voluptatem autem
      - button "Supprimer" [ref=e522] [cursor=pointer]
    - listitem [ref=e523]:
      - checkbox [ref=e524]
      - generic [ref=e525]: rerum culpa quis harum
      - button "Supprimer" [ref=e526] [cursor=pointer]
    - listitem [ref=e527]:
      - checkbox [checked] [ref=e528]
      - generic [ref=e529]: nulla aliquid eveniet harum laborum libero alias ut unde
      - button "Supprimer" [ref=e530] [cursor=pointer]
    - listitem [ref=e531]:
      - checkbox [ref=e532]
      - generic [ref=e533]: qui ea incidunt quis
      - button "Supprimer" [ref=e534] [cursor=pointer]
    - listitem [ref=e535]:
      - checkbox [checked] [ref=e536]
      - generic [ref=e537]: qui molestiae voluptatibus velit iure harum quisquam
      - button "Supprimer" [ref=e538] [cursor=pointer]
    - listitem [ref=e539]:
      - checkbox [checked] [ref=e540]
      - generic [ref=e541]: et labore eos enim rerum consequatur sunt
      - button "Supprimer" [ref=e542] [cursor=pointer]
    - listitem [ref=e543]:
      - checkbox [ref=e544]
      - generic [ref=e545]: molestiae doloribus et laborum quod ea
      - button "Supprimer" [ref=e546] [cursor=pointer]
    - listitem [ref=e547]:
      - checkbox [ref=e548]
      - generic [ref=e549]: facere ipsa nam eum voluptates reiciendis vero qui
      - button "Supprimer" [ref=e550] [cursor=pointer]
    - listitem [ref=e551]:
      - checkbox [ref=e552]
      - generic [ref=e553]: asperiores illo tempora fuga sed ut quasi adipisci
      - button "Supprimer" [ref=e554] [cursor=pointer]
    - listitem [ref=e555]:
      - checkbox [ref=e556]
      - generic [ref=e557]: qui sit non
      - button "Supprimer" [ref=e558] [cursor=pointer]
    - listitem [ref=e559]:
      - checkbox [checked] [ref=e560]
      - generic [ref=e561]: placeat minima consequatur rem qui ut
      - button "Supprimer" [ref=e562] [cursor=pointer]
    - listitem [ref=e563]:
      - checkbox [ref=e564]
      - generic [ref=e565]: consequatur doloribus id possimus voluptas a voluptatem
      - button "Supprimer" [ref=e566] [cursor=pointer]
    - listitem [ref=e567]:
      - checkbox [checked] [ref=e568]
      - generic [ref=e569]: aut consectetur in blanditiis deserunt quia sed laboriosam
      - button "Supprimer" [ref=e570] [cursor=pointer]
    - listitem [ref=e571]:
      - checkbox [checked] [ref=e572]
      - generic [ref=e573]: explicabo consectetur debitis voluptates quas quae culpa rerum non
      - button "Supprimer" [ref=e574] [cursor=pointer]
    - listitem [ref=e575]:
      - checkbox [checked] [ref=e576]
      - generic [ref=e577]: maiores accusantium architecto necessitatibus reiciendis ea aut
      - button "Supprimer" [ref=e578] [cursor=pointer]
    - listitem [ref=e579]:
      - checkbox [ref=e580]
      - generic [ref=e581]: eum non recusandae cupiditate animi
      - button "Supprimer" [ref=e582] [cursor=pointer]
    - listitem [ref=e583]:
      - checkbox [ref=e584]
      - generic [ref=e585]: ut eum exercitationem sint
      - button "Supprimer" [ref=e586] [cursor=pointer]
    - listitem [ref=e587]:
      - checkbox [ref=e588]
      - generic [ref=e589]: beatae qui ullam incidunt voluptatem non nisi aliquam
      - button "Supprimer" [ref=e590] [cursor=pointer]
    - listitem [ref=e591]:
      - checkbox [checked] [ref=e592]
      - generic [ref=e593]: molestiae suscipit ratione nihil odio libero impedit vero totam
      - button "Supprimer" [ref=e594] [cursor=pointer]
    - listitem [ref=e595]:
      - checkbox [checked] [ref=e596]
      - generic [ref=e597]: eum itaque quod reprehenderit et facilis dolor autem ut
      - button "Supprimer" [ref=e598] [cursor=pointer]
    - listitem [ref=e599]:
      - checkbox [ref=e600]
      - generic [ref=e601]: esse quas et quo quasi exercitationem
      - button "Supprimer" [ref=e602] [cursor=pointer]
    - listitem [ref=e603]:
      - checkbox [ref=e604]
      - generic [ref=e605]: animi voluptas quod perferendis est
      - button "Supprimer" [ref=e606] [cursor=pointer]
    - listitem [ref=e607]:
      - checkbox [ref=e608]
      - generic [ref=e609]: eos amet tempore laudantium fugit a
      - button "Supprimer" [ref=e610] [cursor=pointer]
    - listitem [ref=e611]:
      - checkbox [checked] [ref=e612]
      - generic [ref=e613]: accusamus adipisci dicta qui quo ea explicabo sed vero
      - button "Supprimer" [ref=e614] [cursor=pointer]
    - listitem [ref=e615]:
      - checkbox [ref=e616]
      - generic [ref=e617]: odit eligendi recusandae doloremque cumque non
      - button "Supprimer" [ref=e618] [cursor=pointer]
    - listitem [ref=e619]:
      - checkbox [ref=e620]
      - generic [ref=e621]: ea aperiam consequatur qui repellat eos
      - button "Supprimer" [ref=e622] [cursor=pointer]
    - listitem [ref=e623]:
      - checkbox [checked] [ref=e624]
      - generic [ref=e625]: rerum non ex sapiente
      - button "Supprimer" [ref=e626] [cursor=pointer]
    - listitem [ref=e627]:
      - checkbox [checked] [ref=e628]
      - generic [ref=e629]: voluptatem nobis consequatur et assumenda magnam
      - button "Supprimer" [ref=e630] [cursor=pointer]
    - listitem [ref=e631]:
      - checkbox [checked] [ref=e632]
      - generic [ref=e633]: nam quia quia nulla repellat assumenda quibusdam sit nobis
      - button "Supprimer" [ref=e634] [cursor=pointer]
    - listitem [ref=e635]:
      - checkbox [checked] [ref=e636]
      - generic [ref=e637]: dolorem veniam quisquam deserunt repellendus
      - button "Supprimer" [ref=e638] [cursor=pointer]
    - listitem [ref=e639]:
      - checkbox [checked] [ref=e640]
      - generic [ref=e641]: debitis vitae delectus et harum accusamus aut deleniti a
      - button "Supprimer" [ref=e642] [cursor=pointer]
    - listitem [ref=e643]:
      - checkbox [checked] [ref=e644]
      - generic [ref=e645]: debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis
      - button "Supprimer" [ref=e646] [cursor=pointer]
    - listitem [ref=e647]:
      - checkbox [ref=e648]
      - generic [ref=e649]: et praesentium aliquam est
      - button "Supprimer" [ref=e650] [cursor=pointer]
    - listitem [ref=e651]:
      - checkbox [checked] [ref=e652]
      - generic [ref=e653]: ex hic consequuntur earum omnis alias ut occaecati culpa
      - button "Supprimer" [ref=e654] [cursor=pointer]
    - listitem [ref=e655]:
      - checkbox [checked] [ref=e656]
      - generic [ref=e657]: omnis laboriosam molestias animi sunt dolore
      - button "Supprimer" [ref=e658] [cursor=pointer]
    - listitem [ref=e659]:
      - checkbox [ref=e660]
      - generic [ref=e661]: natus corrupti maxime laudantium et voluptatem laboriosam odit
      - button "Supprimer" [ref=e662] [cursor=pointer]
    - listitem [ref=e663]:
      - checkbox [ref=e664]
      - generic [ref=e665]: reprehenderit quos aut aut consequatur est sed
      - button "Supprimer" [ref=e666] [cursor=pointer]
    - listitem [ref=e667]:
      - checkbox [ref=e668]
      - generic [ref=e669]: fugiat perferendis sed aut quidem
      - button "Supprimer" [ref=e670] [cursor=pointer]
    - listitem [ref=e671]:
      - checkbox [ref=e672]
      - generic [ref=e673]: quos quo possimus suscipit minima ut
      - button "Supprimer" [ref=e674] [cursor=pointer]
    - listitem [ref=e675]:
      - checkbox [ref=e676]
      - generic [ref=e677]: et quis minus quo a asperiores molestiae
      - button "Supprimer" [ref=e678] [cursor=pointer]
    - listitem [ref=e679]:
      - checkbox [ref=e680]
      - generic [ref=e681]: recusandae quia qui sunt libero
      - button "Supprimer" [ref=e682] [cursor=pointer]
    - listitem [ref=e683]:
      - checkbox [checked] [ref=e684]
      - generic [ref=e685]: ea odio perferendis officiis
      - button "Supprimer" [ref=e686] [cursor=pointer]
    - listitem [ref=e687]:
      - checkbox [ref=e688]
      - generic [ref=e689]: quisquam aliquam quia doloribus aut
      - button "Supprimer" [ref=e690] [cursor=pointer]
    - listitem [ref=e691]:
      - checkbox [checked] [ref=e692]
      - generic [ref=e693]: fugiat aut voluptatibus corrupti deleniti velit iste odio
      - button "Supprimer" [ref=e694] [cursor=pointer]
    - listitem [ref=e695]:
      - checkbox [ref=e696]
      - generic [ref=e697]: et provident amet rerum consectetur et voluptatum
      - button "Supprimer" [ref=e698] [cursor=pointer]
    - listitem [ref=e699]:
      - checkbox [ref=e700]
      - generic [ref=e701]: harum ad aperiam quis
      - button "Supprimer" [ref=e702] [cursor=pointer]
    - listitem [ref=e703]:
      - checkbox [ref=e704]
      - generic [ref=e705]: similique aut quo
      - button "Supprimer" [ref=e706] [cursor=pointer]
    - listitem [ref=e707]:
      - checkbox [checked] [ref=e708]
      - generic [ref=e709]: laudantium eius officia perferendis provident perspiciatis asperiores
      - button "Supprimer" [ref=e710] [cursor=pointer]
    - listitem [ref=e711]:
      - checkbox [ref=e712]
      - generic [ref=e713]: magni soluta corrupti ut maiores rem quidem
      - button "Supprimer" [ref=e714] [cursor=pointer]
    - listitem [ref=e715]:
      - checkbox [ref=e716]
      - generic [ref=e717]: et placeat temporibus voluptas est tempora quos quibusdam
      - button "Supprimer" [ref=e718] [cursor=pointer]
    - listitem [ref=e719]:
      - checkbox [checked] [ref=e720]
      - generic [ref=e721]: nesciunt itaque commodi tempore
      - button "Supprimer" [ref=e722] [cursor=pointer]
    - listitem [ref=e723]:
      - checkbox [checked] [ref=e724]
      - generic [ref=e725]: omnis consequuntur cupiditate impedit itaque ipsam quo
      - button "Supprimer" [ref=e726] [cursor=pointer]
    - listitem [ref=e727]:
      - checkbox [checked] [ref=e728]
      - generic [ref=e729]: debitis nisi et dolorem repellat et
      - button "Supprimer" [ref=e730] [cursor=pointer]
    - listitem [ref=e731]:
      - checkbox [ref=e732]
      - generic [ref=e733]: ut cupiditate sequi aliquam fuga maiores
      - button "Supprimer" [ref=e734] [cursor=pointer]
    - listitem [ref=e735]:
      - checkbox [checked] [ref=e736]
      - generic [ref=e737]: inventore saepe cumque et aut illum enim
      - button "Supprimer" [ref=e738] [cursor=pointer]
    - listitem [ref=e739]:
      - checkbox [checked] [ref=e740]
      - generic [ref=e741]: omnis nulla eum aliquam distinctio
      - button "Supprimer" [ref=e742] [cursor=pointer]
    - listitem [ref=e743]:
      - checkbox [ref=e744]
      - generic [ref=e745]: molestias modi perferendis perspiciatis
      - button "Supprimer" [ref=e746] [cursor=pointer]
    - listitem [ref=e747]:
      - checkbox [ref=e748]
      - generic [ref=e749]: voluptates dignissimos sed doloribus animi quaerat aut
      - button "Supprimer" [ref=e750] [cursor=pointer]
    - listitem [ref=e751]:
      - checkbox [ref=e752]
      - generic [ref=e753]: explicabo odio est et
      - button "Supprimer" [ref=e754] [cursor=pointer]
    - listitem [ref=e755]:
      - checkbox [ref=e756]
      - generic [ref=e757]: consequuntur animi possimus
      - button "Supprimer" [ref=e758] [cursor=pointer]
    - listitem [ref=e759]:
      - checkbox [checked] [ref=e760]
      - generic [ref=e761]: vel non beatae est
      - button "Supprimer" [ref=e762] [cursor=pointer]
    - listitem [ref=e763]:
      - checkbox [checked] [ref=e764]
      - generic [ref=e765]: culpa eius et voluptatem et
      - button "Supprimer" [ref=e766] [cursor=pointer]
    - listitem [ref=e767]:
      - checkbox [checked] [ref=e768]
      - generic [ref=e769]: accusamus sint iusto et voluptatem exercitationem
      - button "Supprimer" [ref=e770] [cursor=pointer]
    - listitem [ref=e771]:
      - checkbox [checked] [ref=e772]
      - generic [ref=e773]: temporibus atque distinctio omnis eius impedit tempore molestias pariatur
      - button "Supprimer" [ref=e774] [cursor=pointer]
    - listitem [ref=e775]:
      - checkbox [ref=e776]
      - generic [ref=e777]: ut quas possimus exercitationem sint voluptates
      - button "Supprimer" [ref=e778] [cursor=pointer]
    - listitem [ref=e779]:
      - checkbox [checked] [ref=e780]
      - generic [ref=e781]: rerum debitis voluptatem qui eveniet tempora distinctio a
      - button "Supprimer" [ref=e782] [cursor=pointer]
    - listitem [ref=e783]:
      - checkbox [ref=e784]
      - generic [ref=e785]: sed ut vero sit molestiae
      - button "Supprimer" [ref=e786] [cursor=pointer]
    - listitem [ref=e787]:
      - checkbox [checked] [ref=e788]
      - generic [ref=e789]: rerum ex veniam mollitia voluptatibus pariatur
      - button "Supprimer" [ref=e790] [cursor=pointer]
    - listitem [ref=e791]:
      - checkbox [checked] [ref=e792]
      - generic [ref=e793]: consequuntur aut ut fugit similique
      - button "Supprimer" [ref=e794] [cursor=pointer]
    - listitem [ref=e795]:
      - checkbox [checked] [ref=e796]
      - generic [ref=e797]: dignissimos quo nobis earum saepe
      - button "Supprimer" [ref=e798] [cursor=pointer]
    - listitem [ref=e799]:
      - checkbox [checked] [ref=e800]
      - generic [ref=e801]: quis eius est sint explicabo
      - button "Supprimer" [ref=e802] [cursor=pointer]
    - listitem [ref=e803]:
      - checkbox [checked] [ref=e804]
      - generic [ref=e805]: numquam repellendus a magnam
      - button "Supprimer" [ref=e806] [cursor=pointer]
    - listitem [ref=e807]:
      - checkbox [ref=e808]
      - generic [ref=e809]: ipsam aperiam voluptates qui
      - button "Supprimer" [ref=e810] [cursor=pointer]
  - button "Charger les todos" [ref=e811] [cursor=pointer]
  - button "Masquer les terminées" [active] [ref=e812] [cursor=pointer]
```

# Test source

```ts
  54  |     await waitForTodos(page);
  55  |     const stats = page.getByTestId('stats');
  56  |     await expect(stats).toBeVisible();
  57  |     await expect(stats).toContainText('terminé(s)');
  58  |     await expect(stats).toContainText('en attente');
  59  |   });
  60  | 
  61  |   // --- Ajout d'un todo ---
  62  |   test('ajoute un nouveau todo via le formulaire', async ({ page }) => {
  63  |     const timestamp = Date.now();
  64  |     const newTitle  = `Todo E2E ${timestamp}`;
  65  | 
  66  |     const countBefore = await page.getByTestId('todo-item').count();
  67  | 
  68  |     await page.getByTestId('new-todo-input').fill(newTitle);
  69  |     await page.getByTestId('add-btn').click();
  70  | 
  71  |     // L'item doit apparaître dans la liste
  72  |     await expect(page.getByTestId('todo-title').filter({ hasText: newTitle }))
  73  |       .toBeVisible({ timeout: 5_000 });
  74  | 
  75  |     // La liste a grandi
  76  |     await expect(page.getByTestId('todo-item')).toHaveCount(countBefore + 1);
  77  |   });
  78  | 
  79  |   test('vide le champ de saisie après ajout', async ({ page }) => {
  80  |     await page.getByTestId('new-todo-input').fill('Test vidage');
  81  |     await page.getByTestId('add-btn').click();
  82  | 
  83  |     await expect(page.getByTestId('new-todo-input')).toHaveValue('');
  84  |   });
  85  | 
  86  |   test('n\'ajoute pas un todo si le champ est vide', async ({ page }) => {
  87  |     await waitForTodos(page);
  88  |     const countBefore = await page.getByTestId('todo-item').count();
  89  | 
  90  |     await page.getByTestId('add-btn').click();
  91  | 
  92  |     await expect(page.getByTestId('todo-item')).toHaveCount(countBefore);
  93  |   });
  94  | 
  95  |   // --- Suppression ---
  96  |   test('supprime un todo en cliquant sur le bouton Supprimer', async ({ page }) => {
  97  |     await waitForTodos(page);
  98  |     const countBefore = await page.getByTestId('todo-item').count();
  99  | 
  100 |     // Supprime le premier todo
  101 |     const firstItem      = page.getByTestId('todo-item').first();
  102 |     const firstTitle     = await firstItem.getByTestId('todo-title').textContent();
  103 |     const deleteBtn      = firstItem.locator('button');
  104 |     await deleteBtn.click();
  105 | 
  106 |     // Le todo disparaît
  107 |     await expect(page.getByTestId('todo-title').filter({ hasText: firstTitle ?? '' }))
  108 |       .toHaveCount(0, { timeout: 5_000 });
  109 | 
  110 |     await expect(page.getByTestId('todo-item')).toHaveCount(countBefore - 1);
  111 |   });
  112 | 
  113 |   // --- Toggle (complétion) ---
  114 |   test('bascule l\'état d\'un todo via la checkbox', async ({ page }) => {
  115 |     await waitForTodos(page);
  116 | 
  117 |     // Trouve un todo non complété
  118 |     const uncompleted = page.getByTestId('todo-item').filter({
  119 |       hasNot: page.locator('.completed'),
  120 |     }).first();
  121 | 
  122 |     await expect(uncompleted).toBeVisible();
  123 |     const checkbox = uncompleted.locator('input[type="checkbox"]');
  124 |     await checkbox.check();
  125 | 
  126 |     // Le todo doit maintenant avoir la classe .completed
  127 |     await expect(uncompleted).toHaveClass(/completed/, { timeout: 5_000 });
  128 |   });
  129 | 
  130 |   // --- Rechargement ---
  131 |   test('recharge la liste via le bouton "Charger les todos"', async ({ page }) => {
  132 |     await waitForTodos(page);
  133 |     await page.getByTestId('load-btn').click();
  134 | 
  135 |     // La liste se recharge (au moins un item visible)
  136 |     await expect(page.getByTestId('todo-item').first()).toBeVisible({ timeout: 10_000 });
  137 |   });
  138 | 
  139 |   // --- Accessibilité de base ---
  140 |   test('le champ de saisie a un placeholder', async ({ page }) => {
  141 |     const input = page.getByTestId('new-todo-input');
  142 |     await expect(input).toHaveAttribute('placeholder', 'Nouvelle tâche…');
  143 |   });
  144 | 
  145 |   test('nettoie les todos completed via le bouton "Masquer les terminées"', async ({ page}) => {
  146 |     await waitForTodos(page)
  147 |     const cleanBtn = page.getByTestId('clean-btn');
  148 |     // compter les elements complétés + total
  149 |     const countTotalBefore = await page.getByTestId('todo-item').count();
  150 |     const countTotalCompletedBefore = await page.locator('[data-testid="todo-item"].completed').count();
  151 |     await cleanBtn.click();
  152 |     const countTotalAfter = await page.getByTestId('todo-item').count();
  153 |     const countTotalCompletedAfter = await page.locator('[data-testid="todo-item"].completed').count();
> 154 |     expect(countTotalAfter).toBe(countTotalBefore - countTotalCompletedBefore)
      |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  155 |     expect(countTotalCompletedAfter).toBe(0)
  156 |   })
  157 | });
  158 | 
```