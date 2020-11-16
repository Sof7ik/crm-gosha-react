import React from 'react';
import styles from './bloggers.module.scss';

// ======== components ========
import Blogger from './blogger/Blogger';
// ======== components ========

export default class Bloggers extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            bloggers: []
        }
    }

    // async componentDidMount () {
    //     await fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(jsoned => {
    //         this.setState({bloggers: [...jsoned]})
    //     })
    // }

    async componentDidMount () {
        await fetch('/server/bloggers.php')
        .then(res => res.json())
        .then(jsoned => {
            this.setState({bloggers: [...jsoned]})
        })
    }

    render() {
        return (
            <div className={styles.bloggersWrapper}>
                {/* {
                    this.state.bloggers.map( (blogger, index) => {
                        console.log(blogger);
                        return <Blogger
                                key={index} 
                                image='https://via.placeholder.com/140x140'
                                name={blogger.name}
                                surname={blogger.surname}
                                email={blogger.email}
                                zip={blogger.zip}
                                website={blogger.website}/>
                    })
                } */}

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>

                <Blogger image='https://via.placeholder.com/140x140' name='Леонид' surname='Бычков' email='bychkov.l47@mail.ru' zip='141280' website='https://Sof7ik.github.io/GloAcademyLanding/'/>
            </div>
        )
    }
}