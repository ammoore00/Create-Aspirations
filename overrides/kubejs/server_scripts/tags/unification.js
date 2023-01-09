ServerEvents.tags('item', event => {
    event.add('aspirations:unification/dough', [
        "farmersdelight:wheat_dough",
        "create:dough"
    ])

    event.add('aspirations:unification/rope', [
        'farmersdelight:rope',
        'supplementaries:rope',
        'beautify:rope'
    ])
})