module.exports = async(client, data) => {
  let status = ['Joue à =help','Developeur : GeekerFactory2.0',"Pour plus d'info lire la bio"]
  let rsatus = Math.floor(Math.random() * status.length);
  client.user.setActivity(status[rsatus] , {type: "PLAYING"})
  
  
  
  
  /*client.user.setActivity(`MegaBot | =help`, {
      type: "PLAYING",
    });*/
}