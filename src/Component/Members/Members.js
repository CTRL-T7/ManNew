import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './Members.scss'
import { ThemeProvider } from '@emotion/react'
import theme from '../../Styles/theme/Theme'
import { UIProvider } from '../../Ui'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Wall from '../Wall/Wall'
import { Link, useNavigate } from 'react-router-dom'
import Subscribe from '../Subscribe/Subscribe'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import Image from '../../images/hand.png'
import Image2 from '../../images/Vector.png'
import Point1 from '../../images/Frame 44-1.png'
import Point2 from '../../images/Frame 44.png'
import Point3 from '../../images/Frame 45.png'
import Point4 from '../../images/Frame 46-1.png'
import Point5 from '../../images/Group 6.png'
import Point6 from '../../images/Frame 46.png'

function Members() {
  const [selectedQuest, setSelectedQuest] = useState({
    header: '',
    content: '',
  })
  const navigate = useNavigate()
  const FaqList = [
    {
      header: ' How do I become a member of MAN?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header: ' How long does it take to become a member?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header: ' What are the benefits of being a member of MAN?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header: ' What is the cost of registration?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header:
        ' If I make a subscription at the middle of the existing year, do I still need to pay another subscription for the following year?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header: ' What is the duration of one subscription?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header: ' How long will it take to complete my registration?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header: ' What are the requirements for change of name?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header:
        ' What do we need to do if our company is replacing his representative to the association.',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header: ' How do we get our lost certificate replaced?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header: ' How often do we renew our membership certificate?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header: ' How do we discontinue our membership with the association?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
    {
      header:
        ' What may delay the reissuance of the new membership certificate?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem fugiat voluptas ea ab corporis quam, architecto laboriosam aperiam minus.',
    },
  ]
  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        <div className='members'>
          <Subscribe />
          <NavBar location='membership' />
          <div className='hero_image'>
            <div className='cover'>
              <div className='tag'>
                <h2>Home {'>'} Membership</h2>
              </div>
              <h1>Membership</h1>
              <p>See our esteemed members across the country</p>
            </div>
          </div>

          <div className='why'>
            <div className='man'>
              <h1>Why Join MAN?</h1>
              <img src={Image} alt='' />
              <p>Here are five (5) cardinal points why you should join MAN.</p>
            </div>
            <div className='point'>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>RECOGNITION</h1>
                  <p>
                    Recognition by government agencies, private sectors, and
                    financial institutions both home and abroad..
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>INFLUENCE</h1>
                  <p>
                    MAN is working day and night on behalf of members,
                    leveraging on our established relationships with the
                    government to ensure the voice of manufacturers is heard
                    where and when it matters. With business leaders of great
                    minds steering our agenda, and a vibrant membership giving
                    their views, government actively seek our input when
                    legislative or policy decisions are about to be made. We are
                    driven by the issues that matters to manufacturers; if there
                    is something holding you back, MAN is here to help.
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>INSIGHT TO FIRST-HAND INFORMATION</h1>
                  <p>
                    Whether you are planning your next business move, or
                    managing the impact of legislative or political change,
                    knowledge is power. Our market leading economic surveys,
                    forecast and analysis help you plan ahead. Reports;
                    briefings; emails and web updates; seminars, training and
                    workshop; consultative forums give you valuable intelligence
                    on the latest policy and economic developments, business
                    trends and best practice.
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>OPPORTUNITY IN POLICY FORMULATION</h1>
                  <p>
                    Members view are well represented in policy formulation
                    especially policies that affects manufacturers
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>DIRECT INTERVENTION ON MEMBERS??? PROBLEMS</h1>
                  <p>
                    MAN work restlessly to intervening on members??? regulatory
                    and operational issues.
                  </p>
                </div>
              </div>
            </div>
            <div className='benefits'>
              <div className='top'>
                <h1>MEMBERSHIP BENEFITS</h1>
              </div>
              <div className='row1'>
                <div className='card up'>
                  <img src={Point1} alt='' />
                  <p>CREDIBILITY AS MANUFACTURER</p>
                </div>
                <div className='card'>
                  <img src={Point2} alt='' />
                  <p>DIRECT INTERVENTION ON MEMBERS??? PROBLEMS</p>
                </div>
                <div className='card up'>
                  <img src={Point3} alt='' />
                  <p>CONSULTANCY/ADVISORY SERVICES</p>
                </div>
              </div>
              <div className='row2'>
                <div className='card up'>
                  <img src={Point4} alt='' />
                  <p>
                    PUBLIC POLICY ADVOCACY FOR FAVOURABLE INVESTMENT/INDUSTRIAL
                    POLICIES
                  </p>
                </div>
                <div className='card'>
                  <img src={Point5} alt='' />
                  <p>
                    RECOGNITION BY GOVERNMENT AGENCIES AND BUSINESS COMMUNITY
                  </p>
                </div>
                <div className='card up'>
                  <img src={Point6} alt='' />
                  <p>PROMOTING MADE-IN-NIGERIA PRODUCTS</p>
                </div>
              </div>
            </div>
            <div className='respo'>
              <h1>RESPONSIBILITIES OF MEMBERS</h1>
              <p>
                To effectively discharge its role as an effective Business
                Association, MAN expects its members to loyally discharge the
                following responsibilities and obligations:
              </p>
            </div>
            <div className='acrds'>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>RECOGNITION</h1>
                  <p>
                    Every member should: <br /> Endeavour to maintain in all
                    aspects of their operations, a high level of business ethics
                    and recognized standards, thus refraining from all business
                    dealings of questionable nature, which could bring the
                    Association or the manufacturing sector as a whole into
                    disrepute. <br /> Demonstrate transparent commitment to
                    Nigeria???s industrial objectives and policies; placing
                    Nigeria???s best interest above all others and increasing the
                    contribution of the manufacturing sector to the economy, and
                    towards the improvement of the quality of life of Nigerians.{' '}
                    <br />
                    Promote, encourage and improve quality standards and process
                    control in all their manufacturing operations. <br /> Refer
                    to the National Council of the Association, any disagreement
                    between members of the Association for arbitration before
                    either party can pursue such a matter further (if necessary)
                    after Council???s intervention.
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>Payment of Subscription</h1>
                  <p>
                    Every member is bound to further, to the best of its
                    ability, the objects, interest and influence of the
                    Association.
                    <br />
                    Each member will be required to pay an annual subscription
                    to meet the running expenses of the Association.
                    <br />
                    The subscription shall be calculated in accordance with the
                    decision of the National Council and shall be paid annually
                    at the commencement of each Association year or in the case
                    of new members at the time of application for membership.
                    <br />
                    Each member shall submit to the Director General an annual
                    return showing details required for the assessment of the
                    subscriptions due.
                    <br />
                    Any member wishing to resign its membership of the
                    Association may only do so by giving at least three months???
                    notice in writing of its intention to resign.
                    <br />
                    Any member resigning shall pay all subscriptions due from it
                    and shall cease, as from the end of the period of its
                    notice, to have any claim on the Association in respect of
                    its funds.
                    <br />
                    Any member who shall fail in observance of any of the
                    Articles of the Association or act in any manner prejudicial
                    to the interest of the Association may be excluded from the
                    Association on the recommendation of the National Council
                    and confirmed at a General Meeting.
                    <br />A member so excluded shall forfeit all claims to a
                    refund of the money paid by it to the Association on its
                    admission as a member thereof, or by way of annual
                    subscription as the case may be and shall cease to be a
                    member of the Association.
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>General Financial Support of the Association</h1>
                  <p>
                    Members are required to give financial support including
                    sponsorship of activities to the Association as at when
                    requested.
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>Supply of Data</h1>
                  <p>
                    Members should support the Association in all its
                    undertakings by prompt provision of data/ information when
                    requested and by constructive participation in
                    representations and meetings with Government on behalf of
                    the Association when required.
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>Capacity Building for Members</h1>
                  <p>
                    Members are expected to participate in MAN training
                    programmes with a view to improving their product quality
                    and manpower capacity.
                  </p>
                </div>
              </div>
              <div className='card'>
                <div className='left'>
                  <img src={Image2} alt='' />
                </div>
                <div className='right'>
                  <h1>Corporate Social Responsibility</h1>
                  <p>
                    Members of MAN should demonstrate responsible corporate
                    citizenship at all times. <br />
                    Members should therefore endeavor to support the society in
                    the provision of: <br />
                    Utilities <br /> Maintenance of law and order <br />
                    Other philanthropic activities to support the less
                    privileged and the socially disadvantaged.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='rquire'>
            <div className='over'>
              <h1>Check Out our membership requirements</h1>
              <button onClick={() => navigate('/membership-requirement')}>
                Membership requirements
              </button>
            </div>
          </div>
          <div className='faq' id='faq'>
            <div className='faq-wrap'>
              <div className='top'>
                <h1> Frequently Asked Questions (FAQ)</h1>
              </div>
              <div className='listt'>
                <div className='list'>
                  {FaqList.map((item) => (
                    <div
                      className={
                        selectedQuest.header === item.header
                          ? 'card active'
                          : 'card'
                      }
                      key={item.header}
                    >
                      <header onClick={() => setSelectedQuest(item)}>
                        <h2>{item.header}</h2>
                        {selectedQuest.header === item.header ? (
                          <FaMinus />
                        ) : (
                          <FaPlus />
                        )}
                      </header>
                      <article>{item.content}</article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </ThemeProvider>
  )
}

export default Members
