use products


db.createUser( { user: "accountAdmin01",
                 pwd: passwordPrompt(),  
                 customData: { employeeId: 12345 },
                 roles: [ { role: "clusterAdmin", db: "admin" },
                          { role: "readAnyDatabase", db: "admin" },
                          "readWrite"] },
               { w: "majority" , wtimeout: 5000 } )


 db.createUser( { user: "testuser1",
                 pwd: passwordPrompt(),  
                 customData: { employeeId: 988821 },
                 roles: [ { role: "readAnyDatabase", db: "admin" },
                          "readWrite"] },
               { w: "majority" , wtimeout: 5000 } )    



 db.dropUser("accountAdmin01",  { w: "majority" , wtimeout: 5000 } )                        


 mongo -u accountAdmin01 -p 12345 --authenticationDatabase movies