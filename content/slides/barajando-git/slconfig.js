var SLConfig = {
  deck: {
    id: 1606096,
    slug: "git-rebase",
    title: "Barajando git",
    description: "Merging y rebasing",
    width: 960,
    height: 700,
    visibility: "all",
    published_at: "2019-09-23T08:55:54.177Z",
    sanitize_messages: null,
    thumbnail_url: null,
    view_count: 4,
    user: null,
    background_transition: "slide",
    transition: "slide",
    theme_id: null,
    theme_font: "helvetica",
    theme_color: "sand-blue",
    auto_slide_interval: 0,
    comments_enabled: true,
    forking_enabled: true,
    rolling_links: false,
    center: false,
    shuffle: false,
    should_loop: false,
    share_notes: true,
    slide_number: false,
    slide_count: 30,
    rtl: false,
    version: 2,
    collaborative: true,
    deck_user_editor_limit: null,
    data_updated_at: 1570176385538,
    font_typekit: null,
    font_google: null,
    time_limit: 20,
    upsizing_enabled: true,
    notes: {
      cefa58d50e3ccc41da738c18bc160071:
        "- Hash identificador del commit: una checksum calculada a partir del resto de datos\n\n- Autor y fecha\n\n- Descripción: la primera línea es el título, que debe reflejar el objetivo del commit concisamente (menos de 50 caracteres, a ser posible). El resto se puede utilizar para el cómo y por qué, comentar detalles de implementación o cualquier comentario extra.\n\n- Parche mínimo de cambios en los ficheros\n\n- Commit/s antecesores: el parche de cambios se calcula a partir del estado de los ficheros en el commit antecesor",
      "2f8b5ce778b687d8002e6eccb2e1efde":
        "Los conflictos que genera git merge son grandes porque aplica todos los cambios a la vez.\n\nAdemás de eso, tienen mayor dificultad y peligro porque los conflictos se producen con mucho código de otra persona.\n\nEl merge con conflictos (non-fast-forward) puede ser problemático porque se pueden cambiar lo que hacen los commits que se mergean sin que quede patente en su commit correspondiente. Esos commits dejan de ser útiles para revertirlos o consultarlos.",
      "0e48768649ff3d94d936c7ae67d98b29":
        "De esta forma, los commits forman una cadena, construyen una historia. Las ramas y las etiquetas son simplemente punteros al último commit.\n\n(Los commits de merge son hijos de dos antecesores)\n\n(Excepción: los commits raíz no tienen antecesores)",
      "3735b3801f7faf4ce198abff1492030a":
        "Si tienes dos montones en «development», tres montones en tu rama «feature» y los juntas, ¿cuántos montones tienes?\n\nMerge coge los archivos finales de dos ramas y los junta creando UN commit (de merge) y aplicando los cambios de una rama en la otra.\n\nEl commit de merge tiene como antecesores directos los últimos commits de cada una de las ramas (esto es, tiene dos antecesores).",
      "0e8d49b0bcd448d6a67f5403a654aa98":
        "¡Espera!\n\nNos han dicho que hay pocos GIFs en la charla.\n\n[MIC drop]",
      "265019b73538ea83c71977c29c2983ae":
        "Git rebase replica cada uno de los commits de tu rama encima de la nueva rama que toma como base, vuelve a calcular los parches, cambia el commit antecesor y el hash.\n\nApunte de Carli: guía para replicar el comportamiento de git rebase con git cherry-pick.\nhttp://think-like-a-git.net/sections/rebase-from-the-ground-up/using-git-cherry-pick-to-simulate-git-rebase.html",
      "1640a94d556a815327bcc2d4f4ae6c7d":
        "Cuando juntamos los cambios de una rama en otra, los conflictos se nos dan todos juntos.",
      dce0bae284cee03757285542906576e0: "GitKraken",
      cc2a806532648386964a2bc94bd6155e: "GitKraken",
      b3a01167e3e8581ef6a62bf88737b08d:
        "Hace que tu rama vuelva al futuro.",
      "112ca4382a020164aab73aaf973d82b9":
        "Los conflictos se generan uno a uno, por cada commit. La diferencia es que esos commits son código tuyo y su descripción aporta todo el contexto necesario para resolverlo adecuadamente.\n\nGit rebase sobrescribe el historial y, por lo tanto, se necesita pushear al remoto con --force:\n  - SIEMPRE pushear normal antes de un rebase, y\n  - SIEMPRE comprobar que todo funciona después del rebase y antes de pushear de manera forzosa.",
    },
  },
};