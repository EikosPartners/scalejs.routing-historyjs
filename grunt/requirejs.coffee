
module.exports = ( grunt ) ->

    analysis = require 'rjs-build-analysis'

    build:
        options:
            baseUrl: 'src'
            include: '<%=package.name%>'
            exclude: ['scalejs', 'history', 'linqjs', 'requirejs', 'rx.all',
                'rx.all.compat', 'rx', 'rx.compat', 'rx.aggregates', 'rx.async',
                'rx.async.compat', 'rx.backpressure', 'rx.binding',
                'rx.coincidence', 'rx.experimental', 'rx.lite',
                'rx.lite.compat', 'rx.joinpatterns', 'rx.testing', 'rx.time',
                'rx.virtualtime', 'scalejs.functional',
                'scalejs.statechart-scion', 'scalejs.linq-linqjs', 'scion-ng']
            mainConfigFile: 'rjsconfig.js'
            out: 'build/<%=package.name%>.js'
            optimize: 'none'
            done: ( done, output ) ->
                duplicates = analysis.duplicates output

                if duplicates.length > 0
                    grunt.log.subhead 'Duplicates found in requirejs build: '
                    grunt.log.warn duplicates
                    done new Error 'r.js build duplicate modules, please check the excludes option.'
                else
                    done()
