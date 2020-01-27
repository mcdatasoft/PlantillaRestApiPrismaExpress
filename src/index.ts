/*1
console.log("Try npm run check/fix!");

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return ;
  }
  console.log(withThis);
  console.log(andThat);
}
*/

/*2
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Saludos, " + person.firstName + " " + person.lastName;
}

let user = new Student("Catherine", "H.", "de Cuadros");

console.log(greeter(user));
*/
//3 consultando sqlite 
/*
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
  async function main() {
  
    const users = await prisma.clientes.findMany({
        select: {
            nombre: true,
            apellido: true
          }
    })
    console.log(users)
  }  
  main()
  */
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import * as express from 'express'
import * as bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.get(`/clientes/listado`, async (req, res) => {
  //const publishedPosts = await prisma.posts({ where: { published: true } })

  const users = await prisma.clientes.findMany({
    select: {
        nombre: true,
        apellido: true
      }
})

  res.json(users)
})

app.listen(3000, () =>
  console.log('Server is running on http://localhost:3000'),
)