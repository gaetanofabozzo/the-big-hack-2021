import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';

const overrides = {
    MuiCard: {
        root: {
            paddingTop: '20px',
            paddingBottom: '20px',
        }
    }
}

export default createMuiTheme({ palette, typography,overrides });
