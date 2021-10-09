# what-if

## Premise
A what if game pitting impossible heroes against one another.

- Each character will be totally unique, from it's own multiverse
    - each hero's multiverse key can be based off the current time
        - to ensure there is no clashing and an infinite amount of possibilities, 
            use uuidv1, less random more unique 
        - also if there are two registrations at the same nanosecond, one could fail and retry 
            - multiverseInstance = uuidv1
        - If we have run out of possibilities of unique traits, the system needs
            to be smart enough to create it's a new property, having an infinite amount
            of possibilites 

## Tech stack

- Docker
- Node
- GraphQL (Apollo)
- Postgres (Prisma)
