import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import '../style/index.scss';

const Layout = ({ children, site }) => {
	const [aboutOpen, setAboutOpen] = useState(false);
	const [titleVisible, setTitleVisible] = useState(false);

	useEffect(() => {
		const isClient = typeof window != 'undefined';
		window.addEventListener('scroll', (e) => {
			if (window.scrollY >= 25 && !titleVisible && isClient) {
				setTitleVisible(true);
			} else if (window.scrollY <= 5 && titleVisible && isClient) {
				setTitleVisible(false);
			}
		});
	});

	return (
		<div>
			<Helmet title={site.siteMetadata.siteName} />
			<div className='Container'>
				<div className='Header'>
					<div className='Wrap'>
						<div className='Header__body'>
							<h1
								className={`Header__title ${
									titleVisible ? 'Header__title-visible' : ''
								}`}
							>
								<Link to='/'>{site.siteMetadata.siteName}</Link>
							</h1>
							<div className='Header__links'>
								<h4
									onClick={() => setAboutOpen(!aboutOpen)}
									className='Header__about'
								>
									About me
								</h4>
								<div className='Header__summary snipcart-summary snipcart-checkout'>
									<div className='Header__cart'>
										<svg
											height='30px'
											viewBox='0 -31 512.00026 512'
											width='30px'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fill='#fefefe'
												d='m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0'
											/>
											<path
												fill='#fefefe'
												d='m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0'
											/>
											<path
												fill='#fefefe'
												d='m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0'
											/>
										</svg>
										<span className='snipcart-total-items'></span>
									</div>
									<div className='Header__summary__line'>
										<span className='snipcart-total-price'></span>
									</div>
								</div>
							</div>
						</div>
						<div
							className='Header__about-container'
							style={{
								height: aboutOpen ? null : 0,
							}}
						>
							<p>
								I am a person and I do thing. I do thing well.
								Buy my thing.
							</p>
						</div>
					</div>
				</div>
				<div className='Wrap'>{children}</div>
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.func,
};

export default Layout;
