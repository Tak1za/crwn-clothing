import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectShopData} from "../../redux/shop/shop.selectors";

const ShopPage = ({collections}) => (
    <div className="shop-page">
        <h1>Collections</h1>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopData
})

export default connect(mapStateToProps)(ShopPage);
