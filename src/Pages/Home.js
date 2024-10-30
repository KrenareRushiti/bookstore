import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import './My-sass.scss';
import Footer from './Footer';


function Home({addtoCart}) {


    const recommendedBooks = [
      {
        id: 1,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        img: "https://m.media-amazon.com/images/I/51u6LIbFoML._AC_UY327_FMwebp_QL65_.jpg",
        description: "In The Power of Habit, award-winning New York Times business reporter Charles Duhigg takes us to the thrilling edge of scientific discoveries that explain why habits exist and how they can be changed. With penetrating intelligence and an ability to distill vast amounts of information into engrossing narratives, Duhigg brings to life a whole new understanding of human nature and its potential for transformation, Along the way we learn why some people and companies struggle to change, despite years of trying, while others seem to remake themselves overnight. We visit laboratories where neuroscientists explore how habits work and where, exactly, they reside in our brains. We discover how the right habits were crucial to the success of Olympic swimmer Michael Phelps, Starbucks CEO Howard Schultz, and civil-rights hero Martin Luther King, Jr. We go inside Procter & Gamble, Target superstores, Rick Warren’s Saddleback Church, NFL locker rooms, and the nation’s largest hospitals and see how implementing so-called keystone habits can earn billions and mean the difference between failure and success, life and death. At its core, The Power of Habit contains an exhilarating argument: The key to exercising regularly, losing weight, raising exceptional children, becoming more productive, building revolutionary companies and social movements, and achieving success is understanding how habits work. Habits aren’t destiny. As Charles Duhigg shows, by harnessing this new science, we can transform our businesses, our communities, and our lives.",
        price: "16.99",
      },

      {
        id: 2,
        title: "1984",
        author: "George Orwell",
        img: "https://m.media-amazon.com/images/I/61o7pmEBSeL._AC_UY327_FMwebp_QL65_.jpg",
        description: "A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching. Thought Police, Big Brother, Orwellian - these words have entered our vocabulary because of George Orwell's classic dystopian novel 1984. The story of one man's Nightmare Odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality. With a foreword by Thomas Pynchon. This beautiful paperback edition features deckled edges and french flaps a perfect gift for any occasion",
        price: "21.99",
      },

      {
        id: 3,
        title: "The Unicorn Project",
        author: "Gene Kim",
        img: "https://m.media-amazon.com/images/I/91eMffFefqL._AC_UY327_FMwebp_QL65_.jpg",
        description: " In The Unicorn Project, we follow Maxine, a senior lead developer and architect, as she is exiled to the Phoenix Project, to the horror of her friends and colleagues, as punishment for contributing to a payroll outage. She tries to survive in what feels like a heartless and uncaring bureaucracy and to work within a system where no one can get anything done without endless committees, paperwork, and approvals. One day, she is approached by a ragtag bunch of misfits who say they want to overthrow the existing order, to liberate developers, to bring joy back to technology work, and to enable the business to win in a time of digital disruption. To her surprise, she finds herself drawn ever further into this movement, eventually becoming one of the leaders of the Rebellion, which puts her in the crosshairs of some familiar and very dangerous enemies. The Age of Software is here, and another mass extinction event looms—this is a story about rebel developers and business leaders working together, racing against time to innovate, survive, and thrive in a time of unprecedented uncertainty...and opportunity. ",
        price: "23.99",
      },

      {
        id: 4,
        title: "The Chaos Machine",
        author: "Max Fisher",
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632076475i/58950736.jpg",
        description: "Building on years of international reporting, Max Fisher tells the gripping and galling inside story of how Facebook, Twitter, YouTube, and other social networks, in their pursuit of unfettered profits, preyed on psychological frailties to create the algorithms that drive everyday users to extreme opinions and, increasingly, extreme actions. As Fisher demonstrates, the companies’ founding tenets, combined with a blinkered focus maximizing engagement, have led to a destabilized world for everyone. Traversing the planet, Fisher tracks the ubiquity of hate speech and its spillover into violence, ills that first festered in far-off locales to their dark culmination in America during the pandemic, the 2020 election, and the Capitol Insurrection. Through it all, the social-media giants refused to intervene in any meaningful way, claiming to champion free speech when in fact what they most prized were limitless profits. The result, as Fisher shows, is a cultural shift toward a world in which people are polarized not by beliefs based on facts, but by misinformation, outrage, and fear.",
        price: "9.99",
      },

      {
        id: 5,
        title: "The Anxious Generation",
        author: "Jonathan Haidt",
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1711573377i/171681821.jpg",
        description: "In The Anxious Generation, social psychologist Jonathan Haidt lays out the facts about the epidemic of teen mental illness that hit many countries at the same time. He then investigates the nature of childhood, including why children need play and independent exploration to mature into competent, thriving adults. Haidt shows how the “play-based childhood” began to decline in the 1980s, and how it was finally wiped out by the arrival of the “phone-based childhood” in the early 2010s. He presents more than a dozen mechanisms by which this “great rewiring of childhood” has interfered with children’s social and neurological development, covering everything from sleep deprivation to attention fragmentation, addiction, loneliness, social contagion, social comparison, and perfectionism. He explains why social media damages girls more than boys and why boys have been withdrawing from the real world into the virtual world, with disastrous consequences for themselves, their families, and their societies.",
        price: "15.9",
      },

      {
        id: 6,
        title: "Code Dependent",
        author: "Madhumita Murgia",
        img: "https://m.media-amazon.com/images/I/818VHKYRyPL._AC_UY327_FMwebp_QL65_.jpg",
        description: "On the surface, a British poet, an UberEats courier in Pittsburgh, an Indian doctor, and a Chinese activist in exile have nothing in common. But they are in fact linked by a profound common experience―unexpected encounters with artificial intelligence. In Code Dependent, Murgia shows how automated systems are reshaping our lives all over the world, from technology that marks children as future criminals, to an app that is helping to give diagnoses to a remote tribal community. AI has already infiltrated our day-to-day, through language-generating chatbots like ChatGPT and social media. But it’s also affecting us in more insidious ways. It touches everything from our interpersonal relationships, to our kids’ education, work, finances, public services, and even our human rights.",
        price: "14.9",
      },

      {
        id: 7,
        title: "The 48 Laws of Power",
        author: "Robert Greene",
        img: "https://m.media-amazon.com/images/I/611X8GI7hpL._SY522_.jpg",
        description: "In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum. Some laws teach the need for prudence (“Law 1: Never Outshine the Master”), others teach the value of confidence (“Law 28: Enter Action with Boldness”), and many recommend absolute self-preservation (“Law 15: Crush Your Enemy Totally”). Every law, though, has one thing in common: an interest in total domination. In a bold and arresting two-color package, The 48 Laws of Power is ideal whether your aim is conquest, self-defense, or simply to understand the rules of the game.",
        price: "16.99",
      },

      {
        id: 8,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        img: "https://m.media-amazon.com/images/I/81mUfc+x9kL._AC_UY327_FMwebp_QL65_.jpg",
        description: "Sixty years after its original publication, Ray Bradbury’s internationally acclaimed novel Fahrenheit 451 stands as a classic of world literature set in a bleak, dystopian future. Today its message has grown more relevant than ever before. Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.",
        price: "12.99"
      },

      {
        id: 9,
        title: "The Idiot",
        author: "Fyodor Dostoevsky",
        img: "https://m.media-amazon.com/images/I/81GpBL+tl0L._SY522_.jpg",
        description: "Returning to Russia from a sanitarium in Switzerland, the Christ-like epileptic Prince Myshkin finds himself enmeshed in a tangle of love, torn between two women—the notorious kept woman Nastasya and the pure Aglaia—both involved, in turn, with the corrupt, money-hungry Ganya. In the end, Myshkin’s honesty, goodness, and integrity are shown to be unequal to the moral emptiness of those around him. In her revision of the Garnett translation, Anna Brailovsky has corrected inaccuracies wrought by Garnett’s drastic anglicization of the novel, restoring as much as possible the syntactical structure of the original story.",
        price: "4.99",
      },
      {
        id: 10,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        img: "https://m.media-amazon.com/images/I/51Vg24nKbPL._SY522_.jpg",
        description: "With the same suppleness, energy, and range of voices that won their translation of The Brothers Karamazov the PEN/Book-of-the-Month Club Prize, Richard Pevear and Larissa Volokhonsky offer a brilliant translation of Crime and Punishment, Dostoevsky's astounding pyschological thriller, newly revised for his bicentenniel. In Crime and Punishment, when Raskolnikov, an impoverished student living in the St. Petersburg of the tsars, commits an act of murder and theft, he sets into motion a story that is almost unequalled in world literature for its excruciating suspense, its atmospheric vividness, and its depth of characterization and vision. Dostoevsky’s drama of sin, guilt, and redemption transforms the sordid story of an old woman’s murder into the nineteenth century’s profoundest and most compelling philosophical novel.",
        price: "11.45",
      },
      {
        id: 11,
        title: "Animal Farm",
        img: "https://m.media-amazon.com/images/I/51Yl95997ZL._SY445_SX342_.jpg",
        description: "“All animals are equal, but some animals are more equal than others.”A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned—a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible. When Animal Farm was first published, Stalinist Russia was seen as its target. Today it is devastatingly clear that wherever and whenever freedom is attacked, under whatever banner, the cutting clarity and savage comedy of George Orwell’s masterpiece have a meaning and message still ferociously fresh.",
        price: "5.99",
      },
      {
        id: 12,
        title: "War",
        author: "Bob Woodward",
        img: "https://m.media-amazon.com/images/I/61ZRi-MxTLL._SY522_.jpg",
        description: "War is an intimate and sweeping account of one of the most tumultuous periods in presidential politics and American history. We see President Joe Biden and his top advisers in tense conversations with Russian president Vladimir Putin, Israeli prime minister Benjamin Netanyahu and Ukrainian president Volodymyr Zelensky. We also see Donald Trump, conducting a shadow presidency and seeking to regain political power. With unrivaled, inside-the-room reporting, Woodward shows President Biden’s approach to managing the war in Ukraine, the most significant land war in Europe since World War II, and his tortured path to contain the bloody Middle East conflict between Israel and the terrorist group Hamas.",
        price: "21",
      },
    ];

    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle the search input
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter recommended books based on the search query
    const filteredBooks = recommendedBooks.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Container>
                <div className='Home'> 
                    <Stack direction="horizontal" gap={3} className="my-3">
                        <Form.Control 
                            className="me-auto" 
                            placeholder="Discover your next favorite book..." 
                            value={searchQuery}
                            onChange={handleSearch} // Update search query on change
                        />
                        <Button className="buttonFour">Search</Button>
                        <div className="vr" />
                        <Button className="buttonFive" onClick={() => setSearchQuery('')}>Reset</Button>
                    </Stack>    
                    {/* Always display recommended books */}
                    <p className='demo'>
                        {searchQuery ? "Search Results" : "Books you should read in a lifetime:"}
                    </p>

    <Row xs={1} md={2} className='g-4'>
      {(searchQuery ? filteredBooks : recommendedBooks).map((book) => (
        <Col key={book.id}>
          <Card>
             <Row>
                    {/* Kolona për imazhin në anën e majtë */}
                <Col md={4}>
                  <Card.Img className="cardImg" src={book.img} alt=''/>
                </Col>
                    {/* Kolona për përmbajtjen në anën e djathtë */}
                <Col className='cardTitle'>
                        <Card.Title>{book.title}</Card.Title> 
                        <Card.Title className='domi'>{book.price}$</Card.Title>
                        <Button className="buttonSix" onClick={() => addtoCart(book)}>Add to Cart</Button>
                  </Col>
                  </Row>
                </Card>
              </Col>
              ))}
            </Row>    
            </div>
          </Container>
          <Footer/>
        </>
    );

  
}

export default Home;
