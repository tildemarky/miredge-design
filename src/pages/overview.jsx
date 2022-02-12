import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import CombatVideo from '../images/mir-edge-combat.mp4';
import {device} from '../components/device';

import Layout from '../components/layout';
import Container from '../components/container';
import Footer from '../components/footer';

const Grid = styled.div`
	display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  > div > p, > div > div > p {
    padding: 0 1rem 0 1rem;
	}
	h2 {
		padding-left: 1rem;
		text-transform: uppercase;
	}
	@media only screen and ${device.tablet} {
		> div > p, > div > div > p {
			padding: 0;
		}
		> div:not(:last-child) {
			padding: 1rem;
		}
	}
	@media ${device.laptop} {
		justify-items: center;
		align-items: center;
		h2 {
			padding-left: 0;
		}
		> div:not(:last-child) {
			padding: initial;
		}
	}
`;
const OverviewLandingImage = styled.div`
	display: none;
	@media ${device.laptop} {
		display: initial;
		grid-column: 1 / span 2;
		width: 500px;
		align-self: center;
		mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 100%);
		grid-row: 1;
	}
`;
const OverviewLanding = styled.div`
  height: 64vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
	text-align: center;
	width: 50%;
	margin: auto;
	font-size: 2em;
	> h1:first-of-type {
		text-transform: uppercase;
		color: #C71C25;
	}
	> h1 {
		text-transform: capitalize;
	}
	@media only screen and ${device.tablet} {
		height: 75vh;
		grid-column: 1 / -1;
	}
	@media ${device.laptop} {
		grid-column: 2 / span 2;
		grid-row: 1;
		z-index: 2;
		> h1 {
			font-size: 4em;
		}
	}
`;
const TraversalSection = styled.div`
	padding-top: 1em;
	>:nth-child(2) {
		margin-top: 1em;
	}
	@media ${device.laptop} {
		grid-row: 3;
		grid-column: span 2;
		width: 80%;
		h2 {
			font-size: 2em;
		}
		p {
			font-size: 1.15em;
			text-align: center;
		}
	}
`;
const MomentusSection = styled.div`
	padding-top: 1em;
	> video {
		margin-bottom: 1em;
	}
	@media ${device.laptop} {
		grid-column: 2 / span 2;
		width: 80%;
		h2 {
			font-size: 2em;
		}
		p {
			font-size: 1.15em;
			text-align: center;
		}
	}
`;
const AdditionsSection = styled.div`
	padding-top: 1em;
	> .MagRope {
		margin-top: 1em;
	}
	> .MagRope > h3, .Focus > h3 {
		padding: 1rem;
		letter-spacing: 5vw;
		text-align: center;
		text-transform: uppercase;
	}
	> .MagRope > .gatsby-image-wrapper, .Focus > .gatsby-image-wrapper {
		float: left;
		width: 100%;
		clip-path: polygon(0 0, 65% 0, 40% 100%, 0% 100%);
		shape-outside: polygon(0 0, 66% 0, 41% 100%, 0% 100%);
	}
	> .MagRope > p, .Focus > p {
		margin-top: 0;
	}
	Img {
		transform: rotate(360deg) scaleX(-1);
	}
	@media only screen and ${device.tablet} {
		display: flex;
		flex-direction: column;
		grid-column: 1 / -1;
		.MagRope {
			height: 100%;
		}
		.Focus > p {
			text-align: right;
		}
		.Focus > .gatsby-image-wrapper {
			transform: scaleX(-1);
			float: right;
			shape-outside: polygon(34% 0, 100% 0, 100% 100%, 59% 100%);
		}
	}
	@media ${device.laptop} {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 2em 1fr;
		column-gap: 2rem;
		margin-left: 1rem;
		margin-right: 1rem;
		h2 {
			grid-column: 1 / -1;
			font-size: 2em;
		}
		.MagRope {
			margin-top: 0;
			grid-column: 3 / span 2;
			align-self: end;
			padding-right: 1rem;
		}
		.Focus {
			grid-row: 2;
			grid-column: 1 / span 2;
			align-self: end;
			padding-left: 1rem;
		}
		> .MagRope > h3, .Focus > h3 {
			letter-spacing: 1vw;
			padding: 1rem 0 1rem 0;
			font-size: 1.5em;
		}
		.MagRope > h3 {
			text-align: left;
		}
		.Focus > h3 {
			text-align: right;
		}
		p {
			font-size: 1.1em;
		}
	}
`;

const OverviewPage = ({ data }) => (
	<Layout>
		<Container>
			<Grid>
				<OverviewLandingImage>
					<Img fluid={data.faithStory.childImageSharp.fluid} />
				</OverviewLandingImage>
				<OverviewLanding>
					<h1>{data.pageDataOverviewToml.firstHeadline}</h1>
					<h1>{data.pageDataOverviewToml.secondHeadline}</h1>
				</OverviewLanding>
				<TraversalSection>
					<h2>{data.pageDataOverviewToml.firstSection.title}</h2>
					<Img fluid={data.runners.childImageSharp.fluid} />      
					<p>{data.pageDataOverviewToml.firstSection.paragraph}</p>
				</TraversalSection>
				<MomentusSection>
					<h2>{data.pageDataOverviewToml.secondSection.title}</h2>
					<p>{data.pageDataOverviewToml.secondSection.paragraph}</p>
					<video 
						controls controlsList="nodownload"
						autoPlay
						muted
						loop
						preload="auto"
						src={CombatVideo}
						width="100%"
						height="auto">
							Sorry, your browser doesn't support embedded videos.
					</video>
				</MomentusSection>
				<AdditionsSection>
					<h2>{data.pageDataOverviewToml.thirdHeadline}</h2>

					<div className="MagRope">
						<h3>{data.pageDataOverviewToml.thirdSection.title}</h3>
						<Img fluid={data.faithGrapple.childImageSharp.fluid} />
						<p>{data.pageDataOverviewToml.thirdSection.paragraph}</p>
					</div>
					<div className="Focus">
						<h3>{data.pageDataOverviewToml.fourthSection.title}</h3>
						<Img fluid={data.faithCombatBlue.childImageSharp.fluid} />
						<p>{data.pageDataOverviewToml.fourthSection.paragraph}</p>
					</div>
				</AdditionsSection>
			</Grid>
			
			<Footer></Footer>
		</Container>	
	</Layout>
);

export default OverviewPage;

export const query = graphql`
	query {
		pageDataOverviewToml {
			firstHeadline
			secondHeadline
			thirdHeadline
			firstSection {
				title
				paragraph
			}
			secondSection {
				title
				paragraph
			}
			thirdSection {
				title
				paragraph
			}
			fourthSection {
				title
				paragraph
			}
		}
		faithStory: file(relativePath: { regex: "/faith-story2/" }) {
			childImageSharp {
				fluid(maxWidth: 1000, quality: 80) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		runners: file(relativePath: { regex: "/noah-running/" }) {
			childImageSharp {
				fluid(maxWidth: 1500, quality: 90) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		faithCombatBlue: file(relativePath: { regex: "/faith-combat-blue/" }) {
			childImageSharp {
				fluid(maxWidth: 1500, quality: 90) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
		faithGrapple: file(relativePath: { regex: "/faith-grapple/" }) {
			childImageSharp {
				fluid(maxWidth: 1500, quality: 90) {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
	}
`;