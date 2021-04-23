/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
    admin: {
        data:
        {
            name: 'Rizwan Ahmed Siddiqui',
            email: 'rizwan.199811@gmail.com'
        },
        overwrite: false
    },
    category: {
        data: [
            {
                name: 'Horror'
            },
            {
                name: 'Action and Adventure'
            },
            {
                name: 'Classics'
            },
            {
                name: 'Comic Book or Graphic Novel'
            },
            {
                name: 'Fantasy'
            },
            {
                name: 'Historical Fiction'
            },
            {
                name: 'Literary Fiction'
            },
            {
                name: 'Science Fiction'
            },
            {
                name: 'Short Stories'
            },
            {
                name: 'Biographies and Autobiographies'
            },
            {
                name: 'Cookbooks'
            },
            {
                name:'History'
            },
            {
                name:'Poetry'
            },
            {
                name:'false Crime'
            }

        ],
        overwrite:false
    },
    role:{
        data: [
            {
                title: 'member'
            },
            {
                title: 'staff'
            },
            {
                title: 'vendor'
            },
            {
                title: 'supplier'
            },
        ],
        overwrite:false
    }
}
