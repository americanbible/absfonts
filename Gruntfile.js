module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: '_site'
                }
            }
        },
        watch: {
          livereload: {
            files: [
                '_config.yml',
                '*.html',
                '_layouts/**',
                '_posts/**',
                '_includes/**',
                '_sass/**',
                'css/**',
            ],
            tasks: ['shell:jekyllBuild'],
            options: {
              livereload: true
            },
          },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['shell', 'connect', 'watch'])
}
