/**
 * @param { import ("knex").Knex} Knex
 * @returns { Promise<void>}
*/
exports.seed = async function(knex){
    //Delete All existing entries

await knex("projects").truncate();
await knex("resources").truncate();
await knex("tasks").truncate();
await knex("projects_resources").truncate();

    const defaultProjects = [
        {project_name:"React ekran Tasarlama", project_description:"react kütüphanesi kullanarak form ekranı oluşturma"},
        {project_name:"Mobil kitaplık uygulaması yap", project_description:"Flutter ile kitaplık uygulaması yapımı"},
    ];
    const defaultResources = [
        {resource_name:"Github" , resource_description:"Github documentation page"},
        {resource_name:"Google" , resource_description:"flutter official page"},
    ]

    const defaultTasks = [
        {task_description:"react form componenti oluştur", task_notes:"react bootstrap kütüphanesini indir, bootstrap form ekrannı kullan"},
        {task_description:"react form validasyonu yap", task_notes:"forma girilen değerleri kontrol et"},
        {task_description:"flutter arayüzü oluştur.", task_notes:"fluterr componentlerinden grid ve card componentlerini kullan"},
    ]
const defaultProjects_Resources = [
    {project_id:1, resource_id:1},
    {project_id:2, resource_id:1},
    {project_id:2, resource_id:2},
]
await knex("projects").insert(defaultProjects);
await knex("resources").insert(defaultResources);
await knex("tasks").insert(defaultTasks);
await knex("projects_resources").insert(defaultProjects_Resources);
}